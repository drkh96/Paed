/* ============================================================
   FULL PEDIATRIC HISTORY SYSTEM
   COMPLETE MULTISTEP FORM WITH AR/EN
   ============================================================ */

let currentStep = 0;
let currentLang = "ar";
let formData = {};

const steps = [];

/* ============================================================
   1) PERSONAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التاريخ الشخصي", en:"Personal History"},
  fields:[
    { id:"name", ar:"اسم الطفل الثلاثي", en:"Child Name", type:"text" },
    { id:"age", ar:"العمر", en:"Age", type:"text" },
    { id:"sex", ar:"الجنس", en:"Sex", type:"select",
      options:[
        { ar:"ذكر", en:"Male" },
        { ar:"أنثى", en:"Female" }
      ]
    },
    { id:"blood", ar:"فصيلة الدم", en:"Blood Group", type:"text" },
    { id:"religion", ar:"الديانة", en:"Religion", type:"text" },
    { id:"address", ar:"عنوان السكن", en:"Parents Address", type:"text" },
    { id:"admission", ar:"تاريخ الدخول", en:"Date of admission", type:"date" },
    { id:"source", ar:"مصدر المعلومات", en:"Source of information", type:"text" },
    { id:"history_date", ar:"تاريخ أخذ السيرة", en:"Date of taking history", type:"date" }
  ]
});

/* ============================================================
   2) FAMILY HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ العائلة", en:"Family History"},
  fields:[
    { id:"mother", ar:"اسم الأم وعمرها", en:"Mother's name & age", type:"text" },
    { id:"father", ar:"اسم الأب وعمره", en:"Father's name & age", type:"text" },
    { id:"consang", ar:"اكو قرابة بين الزوجين؟", en:"Consanguinity?", type:"select",
      options:[
        { ar:"نعم - أقارب", en:"Yes - relatives" },
        { ar:"نعم - غربة", en:"Yes - non-relatives" },
        { ar:"لا", en:"No" }
      ]
    },
    { id:"parents_health", ar:"صحة الوالدين", en:"Parents’ health", type:"textarea" },
    { id:"grandparents", ar:"صحة الأجداد", en:"Grandparents’ health", type:"textarea" },
    { id:"siblings", ar:"الإخوة والوفيات والإسقاطات", en:"Siblings / deaths / miscarriages", type:"textarea" }
  ]
});

/* ============================================================
   3) CHIEF COMPLAINT
   ============================================================ */
steps.push({
  title:{ ar:"الشكوى الرئيسية", en:"Chief Complaint"},
  fields:[
    { id:"cc", ar:"العَرَض الرئيسي", en:"Main complaint", type:"text" },
    { id:"cc_duration", ar:"المدة", en:"Duration", type:"text" }
  ]
});

/* ============================================================
   4A) DIARRHEA
   ============================================================ */
steps.push({
  title:{ ar:"الإسهال", en:"Diarrhea"},
  fields:[
    { id:"d_start", ar:"بداية الإسهال", en:"When did diarrhea start?", type:"text" },
    { id:"d_freq", ar:"عدد مرات التبرز", en:"Frequency/day", type:"number" },
    { id:"d_change", ar:"زادت لو قلت لو بقت", en:"Change?", type:"text" },
    { id:"d_inc", ar:"ما يزيد الإسهال", en:"What increases?", type:"text" },
    { id:"d_dec", ar:"ما يقلل الإسهال", en:"What decreases?", type:"text" },
    { id:"d_amount", ar:"كمية الخروج", en:"Amount", type:"text" },
    { id:"d_consistency", ar:"قوام الخروج", en:"Consistency", type:"text" },
    { id:"d_blood", ar:"دم أو مخاط؟", en:"Blood/mucus?", type:"text" },
    { id:"d_color", ar:"لون + رائحة", en:"Color + Odor", type:"text" },
    { id:"d_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"d_urine", ar:"ادراره طبيعي؟", en:"Urine output", type:"text" },
    { id:"d_timing", ar:"وقت الإسهال", en:"Timing", type:"text" },
    { id:"d_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ============================================================
   4B) VOMITING
   ============================================================ */
steps.push({
  title:{ ar:"القيء", en:"Vomiting"},
  fields:[
    { id:"v_start", ar:"بداية القيء", en:"Start", type:"text" },
    { id:"v_change", ar:"قلت لو زادت؟", en:"Change?", type:"text" },
    { id:"v_amount", ar:"كمية القيء", en:"Amount", type:"text" },
    { id:"v_times", ar:"عدد مرات القيء", en:"Times/day", type:"number" },
    { id:"v_type", ar:"Effortless لو Projectile", en:"Effortless or projectile?", type:"text" },
    { id:"v_color", ar:"لون القيء", en:"Color", type:"text" },
    { id:"v_blood", ar:"دم؟", en:"Blood?", type:"text" },
    { id:"v_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"v_nasal", ar:"رائحة / وصول للأنف", en:"Nasal regurgitation?", type:"text" },
    { id:"v_relation", ar:"علاقته بالأكل", en:"Relation to feeding", type:"text" },
    { id:"v_inc", ar:"ما يزيد القيء", en:"What increases?", type:"text" },
    { id:"v_dec", ar:"ما يقلل القيء", en:"What decreases?", type:"text" },
    { id:"v_timing", ar:"الوقت", en:"Timing", type:"text" },
    { id:"v_urine", ar:"ادراره متغير؟", en:"Urine effect?", type:"text" },
    { id:"v_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ============================================================
   4C) COUGH
   ============================================================ */
steps.push({
  title:{ ar:"الكحة", en:"Cough"},
  fields:[
    { id:"c_start", ar:"بداية الكحة", en:"Start", type:"text" },
    { id:"c_change", ar:"زادت لو قلت؟", en:"Change?", type:"text" },
    { id:"c_duration", ar:"مدتها", en:"Duration", type:"text" },
    { id:"c_time", ar:"وقتها", en:"Timing", type:"text" },
    { id:"c_type", ar:"نوع الكحة", en:"Type", type:"text" },
    { id:"c_sputum", ar:"بلغم؟", en:"Sputum?", type:"textarea" },
    { id:"c_symptoms", ar:"أعراض مصاحبة", en:"Symptoms", type:"textarea" },
    { id:"c_inc", ar:"ما يزيد الكحة", en:"What increases?", type:"text" },
    { id:"c_dec", ar:"ما يقلل الكحة", en:"What decreases?", type:"text" },
    { id:"c_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ============================================================
   4D) SHORTNESS OF BREATH
   ============================================================ */
steps.push({
  title:{ ar:"ضيق النفس", en:"Shortness of Breath"},
  fields:[
    { id:"s_onset", ar:"بداية الخنگة", en:"Onset", type:"text" },
    { id:"s_type", ar:"مستمرة لو متقطعة", en:"Continuous or intermittent", type:"text" },
    { id:"s_duration", ar:"مدتها", en:"Duration", type:"text" },
    { id:"s_timing", ar:"وقتها", en:"Timing", type:"text" },
    { id:"s_symptoms", ar:"أعراض مصاحبة", en:"Symptoms", type:"textarea" },
    { id:"s_inc", ar:"ما يزيد الخنگة", en:"What increases?", type:"text" },
    { id:"s_dec", ar:"ما يقلل الخنگة", en:"What decreases?", type:"text" },
    { id:"s_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ============================================================
   4E) FEVER
   ============================================================ */
steps.push({
  title:{ ar:"الحمّى", en:"Fever"},
  fields:[
    { id:"f_start", ar:"بداية الصخونة", en:"Start", type:"text" },
    { id:"f_pattern", ar:"تخف وترجع؟", en:"Pattern", type:"text" },
    { id:"f_duration", ar:"مدتها", en:"Duration", type:"text" },
    { id:"f_time", ar:"وقتها", en:"Timing", type:"text" },
    { id:"f_measure", ar:"قيسوها بمحرار؟", en:"How measured?", type:"text" },
    { id:"f_symptoms", ar:"أعراض مصاحبة", en:"Symptoms", type:"textarea" },
    { id:"f_inc", ar:"شنو يزيدها؟", en:"Increases", type:"text" },
    { id:"f_dec", ar:"شنو يقللها؟", en:"Decreases", type:"text" },
    { id:"f_fast", ar:"FAST", en:"FAST effect", type:"text" }
  ]
});

/* ============================================================
   4F) SEIZURES
   ============================================================ */
steps.push({
  title:{ ar:"التشنجات", en:"Seizures"},
  fields:[
    { id:"se_start", ar:"شلون بدت؟", en:"Start", type:"text" },
    { id:"se_fever", ar:"حرارة قبلها؟", en:"Fever before?", type:"text" },
    { id:"se_duration", ar:"مدة النوبة", en:"Duration", type:"text" },
    { id:"se_post", ar:"الوضع بعد النوبة", en:"Post-ictal state", type:"text" },
    { id:"se_type", ar:"نوع الحركات", en:"Type of movements", type:"textarea" },
    { id:"se_loc", ar:"فقدان وعي؟", en:"Loss of consciousness?", type:"text" },
    { id:"se_prev", ar:"نوبات سابقة؟", en:"Previous seizures?", type:"text" },
    { id:"se_trigger", ar:"محفزات", en:"Triggers", type:"text" },
    { id:"se_end", ar:"شلون انتهت؟", en:"How ended?", type:"text" },
    { id:"se_trauma", ar:"إصابة راس؟", en:"Head trauma?", type:"text" },
    { id:"se_fast", ar:"FAST", en:"FAST effect", type:"text" }
  ]
});

/* ============================================================
   5) REVIEW OF SYSTEMS
   ============================================================ */
steps.push({
  title:{ ar:"مراجعة الأجهزة", en:"Review of Systems"},
  fields:[
    { id:"ros_cvs", ar:"قلب وأوعية", en:"Cardiovascular", type:"textarea" },
    { id:"ros_res", ar:"تنفسي", en:"Respiratory", type:"textarea" },
    { id:"ros_gi", ar:"هضمي", en:"GI", type:"textarea" },
    { id:"ros_cns", ar:"عصبي", en:"CNS", type:"textarea" },
    { id:"ros_gu", ar:"بولي", en:"GU", type:"textarea" },
    { id:"ros_msk", ar:"عضلي هيكلي", en:"Musculoskeletal", type:"textarea" },
    { id:"ros_skin", ar:"جلد", en:"Skin", type:"textarea" }
  ]
});

/* ============================================================
   6) PRENATAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ ما قبل الولادة", en:"Prenatal History"},
  fields:[
    { id:"pr_health", ar:"صحة الأم", en:"Mother health", type:"textarea" },
    { id:"pr_diseases", ar:"أمراض الحمل", en:"Illnesses", type:"textarea" },
    { id:"pr_rash", ar:"حمى/طفح", en:"Rash/Fever", type:"text" },
    { id:"pr_infection", ar:"التهابات؟", en:"Infections", type:"text" },
    { id:"pr_xray", ar:"تعرض لأشعة؟", en:"X-ray exposure", type:"text" },
    { id:"pr_drugs", ar:"أدوية؟", en:"Medications", type:"text" },
    { id:"pr_smoke", ar:"تدخين؟", en:"Smoking", type:"text" },
    { id:"pr_vaccine", ar:"لقاحات", en:"Vaccinations", type:"text" },
    { id:"pr_prev", ar:"مشاكل حمل سابقة", en:"Past issues", type:"textarea" },
    { id:"pr_transfusion", ar:"نقل دم", en:"Blood transfusion", type:"text" }
  ]
});

/* ============================================================
   7) NATAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ الولادة", en:"Natal History"},
  fields:[
    { id:"nat_place", ar:"مكان الولادة", en:"Place of delivery", type:"text" },
    { id:"nat_weeks", ar:"عمر الحمل", en:"Gestational age", type:"number" },
    { id:"nat_type", ar:"نوع الولادة", en:"Delivery type", type:"text" },
    { id:"nat_labor", ar:"مدة المخاض", en:"Labor duration", type:"text" },
    { id:"nat_analgesia", ar:"مسكنات؟", en:"Analgesia?", type:"text" },
    { id:"nat_comp", ar:"مشاكل الولادة", en:"Complications", type:"textarea" }
  ]
});

/* ============================================================
   8) POSTNATAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"ما بعد الولادة", en:"Postnatal History"},
  fields:[
    { id:"post_term", ar:"تام لو خدج؟", en:"Term or preterm?", type:"text" },
    { id:"post_weight", ar:"وزن الولادة", en:"Birth weight", type:"text" },
    { id:"post_cry", ar:"صاح مباشرة؟", en:"Cried immediately?", type:"text" },
    { id:"post_apnea", ar:"توقف نفس؟", en:"Apnea?", type:"text" },
    { id:"post_jaundice", ar:"يرقان؟", en:"Jaundice?", type:"text" },
    { id:"post_meconium", ar:"مرور العقي", en:"Meconium", type:"text" },
    { id:"post_urine", ar:"أول تبول", en:"First urination", type:"text" },
    { id:"post_feed", ar:"أول رضعة", en:"First feed", type:"textarea" },
    { id:"post_drugs", ar:"أدوية", en:"Medications", type:"textarea" }
  ]
});

/* ============================================================
   9) FEEDING HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ التغذية", en:"Feeding History"},
  fields:[
    { id:"feed_type", ar:"نوع التغذية", en:"Feeding type", type:"select",
      options:[
        { ar:"رضاعة طبيعية", en:"Breastfeeding" },
        { ar:"رضاعة صناعية", en:"Bottle feeding" }
      ]
    },
    { id:"bf_start", ar:"أول رضعة", en:"First breastfeeding", type:"text" },
    { id:"bf_duration", ar:"مدة الرضعة", en:"Feed duration", type:"text" },
    { id:"bf_times", ar:"عدد الرضعات", en:"Feeds/day", type:"text" },
    { id:"bf_suff", ar:"يشبع؟ وزنه؟", en:"Milk sufficiency", type:"textarea" },
    { id:"bf_tech", ar:"الطريقة", en:"Technique", type:"textarea" },

    { id:"bot_start", ar:"بداية الحليب الصناعي", en:"Start formula", type:"text" },
    { id:"bot_freq", ar:"عدد الرضعات", en:"Feeds/day", type:"number" },
    { id:"bot_amount", ar:"كمية الرضعة", en:"Amount", type:"text" },
    { id:"bot_type", ar:"نوع الحليب", en:"Type", type:"text" },
    { id:"bot_bottles", ar:"عدد القناني", en:"Bottles", type:"text" },
    { id:"bot_prep", ar:"طريقة التحضير", en:"Preparation", type:"textarea" },
    { id:"bot_steril", ar:"تعقيم", en:"Sterilization", type:"text" },
    { id:"bot_change", ar:"تغيير أثناء المرض؟", en:"Change during illness?", type:"text" },
    { id:"bot_allergy", ar:"حساسية", en:"Allergy?", type:"text" }
  ]
});

/* ============================================================
   10) IMMUNISATION HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"اللقاحات", en:"Immunisation History"},
  fields:[
    { id:"vac_complete", ar:"اللقاحات كاملة؟", en:"Vaccines complete?", type:"text" },
    { id:"vac_where", ar:"من أين أخذها؟", en:"Where taken?", type:"text" },
    { id:"vac_dates", ar:"تواريخ اللقاحات", en:"Dates", type:"textarea" },
    { id:"vac_route", ar:"طريق الإعطاء", en:"Route", type:"text" },
    { id:"vac_react", ar:"تفاعل بعد اللقاح", en:"Reaction", type:"textarea" }
  ]
});

/* ============================================================
   11) DEVELOPMENTAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التطور", en:"Developmental History"},
  fields:[
    { id:"dev_compare", ar:"مقارنة بالاطفال", en:"Milestone comparison", type:"textarea" },
    { id:"dev_notes", ar:"ملاحظات", en:"Notes", type:"textarea" }
  ]
});

/* ============================================================
   12) PAST MEDICAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التاريخ المرضي السابق", en:"Past Medical & Drug History"},
  fields:[
    { id:"pm_prev_attacks", ar:"نوبات مشابهة؟", en:"Similar attacks?", type:"text" },
    { id:"pm_illness", ar:"أمراض سابقة", en:"Past illnesses", type:"textarea" },
    { id:"pm_admission", ar:"دخول سابق", en:"Previous admission?", type:"text" },
    { id:"pm_surgery", ar:"عمليات", en:"Surgeries", type:"textarea" },
    { id:"pm_drugs", ar:"أدوية حالياً", en:"Current meds", type:"textarea" },
    { id:"pm_allergy", ar:"تحسس من أدوية", en:"Drug allergy", type:"text" }
  ]
});

/* ============================================================
   13) SOCIOECONOMIC HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التاريخ الاجتماعي", en:"Socioeconomic History"},
  fields:[
    { id:"soc_edu", ar:"تعليم وعمل الوالدين", en:"Parents education & work", type:"textarea" },
    { id:"soc_income", ar:"دخل العائلة", en:"Family income", type:"text" },
    { id:"soc_area", ar:"ريف/مدينة", en:"Urban/Rural", type:"text" },
    { id:"soc_house", ar:"حجم البيت وعدد الاشخاص", en:"House size & residents", type:"textarea" },
    { id:"soc_water", ar:"مصدر ماء الشرب", en:"Water source", type:"text" },
    { id:"soc_pets", ar:"حيوانات اليفة؟", en:"Pets?", type:"text" },
    { id:"soc_smoke", ar:"يدخن أحد؟", en:"Smoking at home?", type:"text" },
    { id:"soc_school", ar:"سلوك الطفل ودراسته", en:"School performance", type:"textarea" }
  ]
});

/* ============================================================
   SUMMARY PAGE
   ============================================================ */
function generateSummary() {
  let html = `<h2>${currentLang === "ar" ? "الملخص" : "Summary"}</h2>`;

  for (const key in formData) {
    html += `<p><strong>${key}:</strong> ${formData[key]}</p>`;
  }

  document.getElementById("form-content").innerHTML = html;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
}

/* ============================================================
   RENDER STEP
   ============================================================ */
function renderStep(){
  const step = steps[currentStep];
  const lang = currentLang;

  document.getElementById("section-title").innerText = step.title[lang];

  let html = "";

  step.fields.forEach(field => {
    html += `<label>${field[lang]}</label>`;

    if (field.type === "text" || field.type === "date" || field.type === "number") {
      html += `<input id="${field.id}" type="${field.type}" value="${formData[field.id] || ""}">`;
    }

    else if (field.type === "textarea") {
      html += `<textarea id="${field.id}">${formData[field.id] || ""}</textarea>`;
    }

    else if (field.type === "select") {
      html += `<select id="${field.id}">`;
      field.options.forEach(opt => {
        const selected = (formData[field.id] === opt[lang]) ? "selected" : "";
        html += `<option ${selected} value="${opt[lang]}">${opt[lang]}</option>`;
      });
      html += `</select>`;
    }
  });

  document.getElementById("form-content").innerHTML = html;

  document.getElementById("backBtn").style.display =
    currentStep === 0 ? "none" : "inline-block";

  document.getElementById("nextBtn").innerText =
    currentStep === steps.length - 1
      ? (lang === "ar" ? "إنهاء" : "Submit")
      : (lang === "ar" ? "التالي" : "Next");
}

/* ============================================================
   SAVE STEP
   ============================================================ */
function saveStep(){
  const fields = steps[currentStep].fields;
  fields.forEach(field => {
    const el = document.getElementById(field.id);
    if (el) formData[field.id] = el.value;
  });
}

/* ============================================================
   BUTTON ACTIONS
   ============================================================ */
document.getElementById("nextBtn").onclick = () => {
  saveStep();
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    generateSummary();
  }
};

document.getElementById("backBtn").onclick = () => {
  if (currentStep > 0) currentStep--;
  renderStep();
};

document.getElementById("langBtn").onclick = () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  renderStep();
};

renderStep();