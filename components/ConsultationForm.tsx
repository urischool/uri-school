"use client";

import { FormEvent } from "react";

const phoneNumber = "01057411134";

function valueList(data: FormData, key: string) {
  return data.getAll(key).filter(Boolean).join(", ");
}

function buildSmsBody(form: HTMLFormElement) {
  const data = new FormData(form);
  const parentPhone = [data.get("parentPhone1"), data.get("parentPhone2"), data.get("parentPhone3")]
    .filter(Boolean)
    .join("-");
  const studentPhone = [data.get("studentPhone1"), data.get("studentPhone2"), data.get("studentPhone3")]
    .filter(Boolean)
    .join("-");

  const lines = [
    "[우리학교과외 상담신청]",
    `학년: ${data.get("grade") || ""}`,
    `학교명: ${data.get("schoolName") || ""}`,
    `학생 성명: ${data.get("studentName") || ""}`,
    `학부모 연락처: ${parentPhone}`,
    `학생 연락처: ${studentPhone}`,
    `상담 희망 과목: ${valueList(data, "subjects")}`,
    `요청사항: ${data.get("message") || ""}`
  ];

  return encodeURIComponent(lines.join("\n"));
}

export function ConsultationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = buildSmsBody(event.currentTarget);
    window.location.href = `sms:${phoneNumber}?&body=${body}`;
  }

  return (
    <section className="consult-form-section" aria-labelledby="consult-form-title">
      <div className="consult-form-copy">
        <h2 id="consult-form-title">상담 신청</h2>
        <p className="consult-note">상담 신청시 당일에 교육 컨설턴트가 연락드립니다</p>
        <p className="consult-benefit">현재 상담 신청시 1회 무료수업 혜택</p>
      </div>

      <form className="consult-form" onSubmit={handleSubmit}>
        <label className="full-field">
          학년 <span aria-hidden="true">*</span>
          <select name="grade" required defaultValue="">
            <option value="" disabled>
              선택
            </option>
            <option>중1</option>
            <option>중2</option>
            <option>중3</option>
            <option>고1</option>
            <option>고2</option>
            <option>고3</option>
            <option>N수/기타</option>
          </select>
        </label>

        <label className="full-field">
          학교명
          <input name="schoolName" placeholder="학교명을 입력해주세요" />
        </label>

        <label className="full-field">
          학생 성명 <span aria-hidden="true">*</span>
          <input name="studentName" required placeholder="예: 홍길동" />
        </label>

        <fieldset className="phone-field full-field">
          <legend>
            학부모 연락처(번호 재차 확인 부탁드립니다) <span aria-hidden="true">*</span>
          </legend>
          <div className="phone-inputs">
            <input name="parentPhone1" inputMode="numeric" maxLength={3} required aria-label="학부모 연락처 앞자리" />
            <span>-</span>
            <input name="parentPhone2" inputMode="numeric" maxLength={4} required aria-label="학부모 연락처 가운데자리" />
            <span>-</span>
            <input name="parentPhone3" inputMode="numeric" maxLength={4} required aria-label="학부모 연락처 뒷자리" />
          </div>
        </fieldset>

        <fieldset className="phone-field full-field">
          <legend>(학생 본인과 상담 진행을 원하실) 학생 연락처</legend>
          <div className="phone-inputs">
            <input name="studentPhone1" inputMode="numeric" maxLength={3} aria-label="학생 연락처 앞자리" />
            <span>-</span>
            <input name="studentPhone2" inputMode="numeric" maxLength={4} aria-label="학생 연락처 가운데자리" />
            <span>-</span>
            <input name="studentPhone3" inputMode="numeric" maxLength={4} aria-label="학생 연락처 뒷자리" />
          </div>
        </fieldset>

        <fieldset className="subject-checks full-field">
          <legend>
            상담 희망 과목 <span aria-hidden="true">*</span>
          </legend>
          {["국어", "영어", "수학", "사회", "과학", "제2외국어", "기타(입시컨설팅,진로상담,학습습관)"].map((subject) => (
            <label key={subject}>
              <input name="subjects" type="checkbox" value={subject} />
              {subject}
            </label>
          ))}
        </fieldset>

        <label className="full-field">
          원하시는 수업의 방향성 및 특이사항
          <textarea name="message" placeholder="현재 등급, 어려운 단원, 상담 희망 내용을 적어주세요." />
        </label>

        <div className="consult-actions">
          <button type="submit">상담 신청하기</button>
        </div>
      </form>
    </section>
  );
}

