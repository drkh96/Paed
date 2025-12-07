/* ============================================================
   FULL PEDIATRIC HISTORY SYSTEM — COMPLETE VERSION
   WITH COPY BUTTON IN SUMMARY
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
      options:[ { ar:"ذكر", en:"Male" }, { ar:"أنثى", en:"Female" } ]
    },
    { id:"blood", ar:"فصيلة الدم", en:"Blood Group", type:"text" },
    { id:"religion", ar:"الديانة", en:"Religion", type:"text" },
    { id:"address", ar:"عنوان السكن", en:"Address", type:"text" },
    { id:"admission", ar:"تاريخ الدخول", en:"Admission Date", type:"date" },
    { id:"source", ar:"مصدر المعلومات", en:"Source of information", type:"text" },
    { id:"history_date", ar:"تاريخ أخذ السيرة", en:"History-taking date", type:"date" }
  ]
});

/* ============================================================
   2) FAMILY HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ العائلة", en:"Family History"},
  fields:[
    { id:"mother", ar:"اسم الأم وعمرها", en:"Mother name & age", type:"text" },
    { id:"father", ar:"اسم الأب وعمره", en:"Father name & age", type:"text" },
    { id:"consang", ar:"اكو قرابة؟", en:"Consanguinity?", type:"select",
      options:[
        { ar:"نعم - أقارب", en:"Yes - relatives" },
        { ar:"نعم - غربة", en:"Yes - non-relatives" },
        { ar:"لا", en:"No" }
      ]
    },
    { id:"parents_health", ar:"صحة الوالدين", en:"Parents’ health", type:"textarea" },
    { id:"grandparents", ar:"صحة الأجداد", en:"Grandparents’ health", type:"textarea" },
    { id:"siblings", ar:"الإخوة / الوفيات / الإسقاطات", en:"Siblings, deaths, miscarriages", type:"textarea" }
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
   4) PRESENT ILLNESS SECTIONS
   ============================================================ */

/* ----------------- DIARRHEA ----------------- */
steps.push({
  title:{ ar:"الإسهال", en:"Diarrhea"},
  fields:[
    { id:"d_start", ar:"شوكت بدأ الإسهال", en:"When did it start?", type:"text" },
    { id:"d_freq", ar:"كم مرة باليوم", en:"Frequency/day", type:"number" },
    { id:"d_change", ar:"زادت لو قلت؟", en:"Change?", type:"text" },
    { id:"d_inc", ar:"شنو يزيدها؟", en:"What increases?", type:"text" },
    { id:"d_dec", ar:"شنو يخففها؟", en:"What decreases?", type:"text" },
    { id:"d_amount", ar:"كمية الخروج", en:"Amount", type:"text" },
    { id:"d_consistency", ar:"قوام الخروج", en:"Consistency", type:"text" },
    { id:"d_blood", ar:"دم/مخاط؟", en:"Blood/mucus?", type:"text" },
    { id:"d_color", ar:"لون + رائحة", en:"Color + odor", type:"text" },
    { id:"d_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"d_urine", ar:"ادراره؟", en:"Urine output", type:"text" },
    { id:"d_timing", ar:"الوقت", en:"Timing", type:"text" },
    { id:"d_fast", ar:"FAST متأثرة؟", en:"FAST affected?", type:"text" }
  ]
});

/* ----------------- VOMITING ----------------- */
steps.push({
  title:{ ar:"القيء", en:"Vomiting"},
  fields:[
    { id:"v_start", ar:"شوكت بدأ القيء؟", en:"When did vomiting start?", type:"text" },
    { id:"v_change", ar:"زاد لو قل؟", en:"Change?", type:"text" },
    { id:"v_amount", ar:"كمية القيء", en:"Amount", type:"text" },
    { id:"v_times", ar:"عدد مرات القيء", en:"Times/day", type:"number" },
    { id:"v_type", ar:"Effortless لو Projectile؟", en:"Effortless or projectile?", type:"text" },
    { id:"v_color", ar:"لون القيء", en:"Color", type:"text" },
    { id:"v_blood", ar:"دم؟", en:"Blood?", type:"text" },
    { id:"v_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"v_nasal", ar:"مواد للأنف؟", en:"Nasal regurgitation?", type:"text" },
    { id:"v_relation", ar:"علاقته بالأكل", en:"Relation to meals", type:"text" },
    { id:"v_inc", ar:"شنو يزيده؟", en:"What increases?", type:"text" },
    { id:"v_dec", ar:"شنو يقلله؟", en:"What decreases?", type:"text" },
    { id:"v_timing", ar:"الوقت", en:"Timing", type:"text" },
    { id:"v_urine", ar:"ادراره؟", en:"Urine effect?", type:"text" },
    { id:"v_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ----------------- COUGH ----------------- */
steps.push({
  title:{ ar:"الكحة", en:"Cough"},
  fields:[
    { id:"c_start", ar:"شوكت بدت الكحة؟", en:"When did cough start?", type:"text" },
    { id:"c_change", ar:"زادت لو قلت؟", en:"Change?", type:"text" },
    { id:"c_duration", ar:"المدة", en:"Duration", type:"text" },
    { id:"c_time", ar:"وقتها", en:"Timing", type:"text" },
    { id:"c_type", ar:"نوع الكحة", en:"Type", type:"text" },
    { id:"c_sputum", ar:"اكو بلغم؟", en:"Sputum?", type:"textarea" },
    { id:"c_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"c_inc", ar:"يزيدها شنو؟", en:"Increases?", type:"text" },
    { id:"c_dec", ar:"يقللها شنو؟", en:"Decreases?", type:"text" },
    { id:"c_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ----------------- SHORTNESS OF BREATH ----------------- */
steps.push({
  title:{ ar:"ضيق النفس", en:"Shortness of Breath"},
  fields:[
    { id:"s_onset", ar:"بداية الخنگة", en:"Onset", type:"text" },
    { id:"s_type", ar:"مستمرة لو تروح وترجع", en:"Continuous or intermittent", type:"text" },
    { id:"s_duration", ar:"مدتها", en:"Duration", type:"text" },
    { id:"s_timing", ar:"وقتها", en:"Timing", type:"text" },
    { id:"s_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"s_inc", ar:"شنو يزيدها؟", en:"What increases?", type:"text" },
    { id:"s_dec", ar:"شنو يقللها؟", en:"What decreases?", type:"text" },
    { id:"s_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ----------------- FEVER ----------------- */
steps.push({
  title:{ ar:"الحمّى", en:"Fever"},
  fields:[
    { id:"f_start", ar:"شوكت بدت الصخونة؟", en:"When did fever start?", type:"text" },
    { id:"f_pattern", ar:"تخف وترجع لو مستمرة؟", en:"Pattern", type:"text" },
    { id:"f_duration", ar:"مدتها", en:"Duration", type:"text" },
    { id:"f_time", ar:"وقتها", en:"Timing", type:"text" },
    { id:"f_measure", ar:"قستموها؟ وين؟", en:"How measured?", type:"text" },
    { id:"f_symptoms", ar:"أعراض مصاحبة", en:"Associated symptoms", type:"textarea" },
    { id:"f_inc", ar:"شنو يزيدها؟", en:"What increases?", type:"text" },
    { id:"f_dec", ar:"شنو يقللها؟", en:"What decreases?", type:"text" },
    { id:"f_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ----------------- SEIZURES ----------------- */
steps.push({
  title:{ ar:"النوبات (التشنجات)", en:"Seizures"},
  fields:[
    { id:"se_start", ar:"شلون بدت؟", en:"How started?", type:"text" },
    { id:"se_fever", ar:"كان اكو حرارة؟", en:"Fever before seizure?", type:"text" },
    { id:"se_duration", ar:"المدة", en:"Duration", type:"text" },
    { id:"se_post", ar:"بعد النوبة", en:"Post-ictal state", type:"text" },
    { id:"se_type", ar:"نوع الحركات", en:"Movement type", type:"textarea" },
    { id:"se_loc", ar:"فقدان وعي؟", en:"Loss of consciousness", type:"text" },
    { id:"se_prev", ar:"نوبات سابقة؟", en:"Previous seizures?", type:"text" },
    { id:"se_trigger", ar:"شنو يحفزها؟", en:"Triggers", type:"text" },
    { id:"se_end", ar:"شلون انتهت؟", en:"How ended?", type:"text" },
    { id:"se_trauma", ar:"إصابة راس؟", en:"Head trauma?", type:"text" },
    { id:"se_fast", ar:"FAST", en:"FAST affected?", type:"text" }
  ]
});

/* ============================================================
   REVIEW OF SYSTEMS
   ============================================================ */
steps.push({
  title:{ ar:"مراجعة الأجهزة", en:"Review of Systems"},
  fields:[
    { id:"ros_cvs", ar:"القلب والأوعية", en:"Cardiovascular", type:"textarea" },
    { id:"ros_res", ar:"التنفس", en:"Respiratory", type:"textarea" },
    { id:"ros_gi", ar:"الهضمي", en:"Gastrointestinal", type:"textarea" },
    { id:"ros_cns", ar:"العصبي", en:"CNS", type:"textarea" },
    { id:"ros_gu", ar:"البولي", en:"Genitourinary", type:"textarea" },
    { id:"ros_msk", ar:"العضلي الهيكلي", en:"Musculoskeletal", type:"textarea" },
    { id:"ros_skin", ar:"الجلد", en:"Skin", type:"textarea" }
  ]
});

/* ============================================================
   PRENATAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ ما قبل الولادة", en:"Prenatal History"},
  fields:[
    { id:"pr_health", ar:"صحة الأم", en:"Mother health", type:"textarea" },
    { id:"pr_diseases", ar:"أمراض الحمل", en:"Pregnancy illnesses", type:"textarea" },
    { id:"pr_rash", ar:"حمى/طفح", en:"Rash/Fever", type:"text" },
    { id:"pr_infection", ar:"UTI؟ التهابات؟", en:"Infections (UTI?)", type:"text" },
    { id:"pr_xray", ar:"تعرض الأشعة؟", en:"X-ray exposure", type:"text" },
    { id:"pr_drugs", ar:"أدوية؟", en:"Medications", type:"text" },
    { id:"pr_smoke", ar:"تدخين؟", en:"Smoking", type:"text" },
    { id:"pr_vaccine", ar:"لقاحات", en:"Vaccinations", type:"text" },
    { id:"pr_prev", ar:"مشاكل سابقة", en:"Past obstetric issues", type:"textarea" },
    { id:"pr_transfusion", ar:"نقل دم", en:"Blood transfusion", type:"text" }
  ]
});

/* ============================================================
   NATAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ الولادة", en:"Natal History"},
  fields:[
    { id:"nat_place", ar:"مكان الولادة", en:"Place of delivery", type:"text" },
    { id:"nat_weeks", ar:"عمر الحمل (أسابيع)", en:"Gestational age", type:"number" },
    { id:"nat_type", ar:"نوع الولادة", en:"Mode of delivery", type:"text" },
    { id:"nat_labor", ar:"مدة المخاض", en:"Duration of labor", type:"text" },
    { id:"nat_analgesia", ar:"استخدموا مسكنات؟", en:"Analgesia?", type:"text" },
    { id:"nat_comp", ar:"مشاكل الولادة", en:"Complications", type:"textarea" }
  ]
});

/* ============================================================
   POSTNATAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"ما بعد الولادة", en:"Postnatal History"},
  fields:[
    { id:"post_term", ar:"ولد تام لو خدج؟", en:"Term or preterm?", type:"text" },
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
   FEEDING HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"تاريخ التغذية", en:"Feeding History"},
  fields:[
    { id:"feed_type", ar:"نوع التغذية", en:"Feeding type", type:"select",
      options:[ { ar:"رضاعة طبيعية", en:"Breastfeeding" }, { ar:"رضاعة صناعية", en:"Bottle feeding" } ]
    },
    { id:"bf_start", ar:"أول رضعة", en:"First breastfeeding", type:"text" },
    { id:"bf_duration", ar:"مدة الرضعة", en:"Feed duration", type:"text" },
    { id:"bf_times", ar:"عدد الرضعات باليوم", en:"Feeds/day", type:"text" },
    { id:"bf_suff", ar:"يشبع؟ وزنه يزيد؟", en:"Milk sufficiency", type:"textarea" },
    { id:"bf_tech", ar:"وضعية وطريقة الرضاعة", en:"Technique", type:"textarea" },

    { id:"bot_start", ar:"أول مرة أخذ حليب صناعي", en:"First formula feed", type:"text" },
    { id:"bot_freq", ar:"عدد الرضعات", en:"Feeds/day", type:"number" },
    { id:"bot_amount", ar:"الكمية", en:"Amount per feed", type:"text" },
    { id:"bot_type", ar:"نوع الحليب", en:"Formula type", type:"text" },
    { id:"bot_bottles", ar:"عدد القناني ونوعها", en:"Bottles type/count", type:"text" },
    { id:"bot_prep", ar:"طريقة التحضير", en:"Preparation", type:"textarea" },
    { id:"bot_steril", ar:"تعقيم القناني", en:"Sterilization", type:"text" },
    { id:"bot_change", ar:"تغيير النوع أثناء المرض؟", en:"Changed during illness?", type:"text" },
    { id:"bot_allergy", ar:"حساسية أكل", en:"Food allergy?", type:"text" }
  ]
});

/* ============================================================
   IMMUNISATION HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"اللقاحات", en:"Immunisation History"},
  fields:[
    { id:"vac_complete", ar:"اللقاحات كاملة لو ناقصة؟", en:"Vaccines complete?", type:"text" },
    { id:"vac_where", ar:"من أين أخذ اللقاح؟", en:"Where administered?", type:"text" },
    { id:"vac_dates", ar:"تواريخ اللقاحات", en:"Vaccine dates", type:"textarea" },
    { id:"vac_route", ar:"طريق الإعطاء", en:"Route", type:"text" },
    { id:"vac_react", ar:"تفاعلات؟ حرارة؟ ورم؟", en:"Reactions", type:"textarea" }
  ]
});

/* ============================================================
   DEVELOPMENTAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التطور", en:"Development"},
  fields:[
    { id:"dev_compare", ar:"تطوره مقارنة بالأطفال الطبيعيين", en:"Development vs milestones", type:"textarea" },
    { id:"dev_notes", ar:"ملاحظات", en:"Notes", type:"textarea" }
  ]
});

/* ============================================================
   PAST MEDICAL HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التاريخ المرضي السابق", en:"Past Medical History"},
  fields:[
    { id:"pm_prev_attacks", ar:"أكو نوبات مشابهة؟", en:"Previous similar attacks?", type:"text" },
    { id:"pm_illness", ar:"أمراض سابقة", en:"Past illnesses", type:"textarea" },
    { id:"pm_admission", ar:"دخل مستشفى قبل؟", en:"Previous admissions", type:"text" },
    { id:"pm_surgery", ar:"عمليات؟", en:"Surgeries", type:"textarea" },
    { id:"pm_drugs", ar:"أدوية حالياً", en:"Current meds", type:"textarea" },
    { id:"pm_allergy", ar:"تحسس من أدوية", en:"Drug allergy", type:"text" }
  ]
});

/* ============================================================
   SOCIOECONOMIC HISTORY
   ============================================================ */
steps.push({
  title:{ ar:"التاريخ الاجتماعي", en:"Socioeconomic History"},
  fields:[
    { id:"soc_edu", ar:"تعليم وعمل الوالدين", en:"Parents’ education & occupation", type:"textarea" },
    { id:"soc_income", ar:"دخل العائلة", en:"Family income", type:"text" },
    { id:"soc_area", ar:"ريف لو مدينة؟", en:"Urban or rural", type:"text" },
    { id:"soc_house", ar:"حجم البيت وعدد الأشخاص", en:"House size & residents", type:"textarea" },
    { id:"soc_water", ar:"مصدر ماء الشرب", en:"Drinking water source", type:"text" },
    { id:"soc_pets", ar:"اكو حيوانات اليفة؟", en:"Pets?", type:"text" },
    { id:"soc_smoke", ar:"يدخنون بالبيت؟", en:"Smoking at home?", type:"text" },
    { id:"soc_school", ar:"علاقات الطفل ودراسته", en:"School behavior", type:"textarea" }
  ]
});

/* ============================================================
   SUMMARY WITH COPY BUTTON
   ============================================================ */
function generateSummary() {
  const lang = currentLang;

  let txt = "";
  for (const key in formData) {
    txt += `${key}: ${formData[key]}\n`;
  }

  let html = `
    <h2>${lang === "ar" ? "الملخص" : "Summary"}</h2>

    <textarea id="summaryBox" style="width:100%;height:300px;">${txt}</textarea>

    <button onclick="copySummary()" 
      style="margin-top:15px;padding:10px 20px;border-radius:10px;background:#28a745;color:white;">
      ${lang === "ar" ? "نسخ كل المعلومات" : "Copy All History"}
    </button>
  `;

  document.getElementById("form-content").innerHTML = html;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
}

/* COPY FUNCTION */
function copySummary() {
  const box = document.getElementById("summaryBox");
  box.select();
  navigator.clipboard.writeText(box.value);
  alert(currentLang === "ar" ? "تم النسخ!" : "Copied!");
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

    if (["text","date","number"].includes(field.type)) {
      html += `<input id="${field.id}" type="${field.type}" value="${formData[field.id] || ""}">`;
    }

    else if (field.type === "textarea") {
      html += `<textarea id="${field.id}">${formData[field.id] || ""}</textarea>`;
    }

    else if (field.type === "select") {
      html += `<select id="${field.id}">`;
      field.options.forEach(opt=>{
        const sel = (formData[field.id] === opt[lang]) ? "selected" : "";
        html += `<option ${sel}>${opt[lang]}</option>`;
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
  fields.forEach(field=>{
    const el = document.getElementById(field.id);
    if (el) formData[field.id] = el.value;
  });
}

/* BUTTON ACTIONS */
document.getElementById("nextBtn").onclick = ()=>{
  saveStep();
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    generateSummary();
  }
};

document.getElementById("backBtn").onclick = ()=>{
  if (currentStep > 0) currentStep--;
  renderStep();
};

document.getElementById("langBtn").onclick = ()=>{
  currentLang = currentLang === "ar" ? "en" : "ar";
  renderStep();
};

renderStep();