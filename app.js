const routines = {
  preGym: {
    id: "preGym",
    title: "Pre-Gym Morning Routine",
    time: "11:00 AM / 12:00 PM",
    startsAt: 11,
    summary: "A light cleanse and sunscreen routine from the original matrix.",
    warnings: [],
    steps: [
      {
        action: "Cleanse",
        product: "Luxe Organix Whitening Repair Cleanser",
        application: "Massage onto damp skin with lukewarm water. Rinse cleanly and pat dry.",
        nuance: "Avoid stripping gel cleansers here. Save heavier cleansing for after your workout."
      },
      {
        action: "Protect",
        product: "Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+",
        application: "Apply a generous, two-finger length amount to your face and neck.",
        nuance: "Use this as the final daytime layer before gym sweat. Avoid adding a separate cream underneath."
      }
    ]
  },
  postGym: {
    id: "postGym",
    title: "Post-Gym Pre-Work Routine",
    time: "5:00 PM",
    startsAt: 17,
    summary: "The matrix double-cleanse, Vitamin C, hydration, eye care, and seal routine.",
    warnings: [],
    steps: [
      {
        action: "First Cleanse",
        product: "Skin1004 Madagascar Centella Light Cleansing Oil",
        application: "Massage 1-2 pumps onto completely dry skin for 30 seconds. Emulsify with water, then rinse thoroughly.",
        nuance: "This removes water-resistant sunscreen, sweat, and sun filters before the water-based cleanser."
      },
      {
        action: "Second Cleanse",
        product: "COSRX Low pH Good Morning Gel Cleanser",
        application: "Work into a foam, cleanse away remaining oil residue, and pat skin completely dry."
      },
      {
        action: "Active",
        product: "Revox B77 Just Vitamin C 20%",
        application: "Smooth 3-4 drops over your bare, dry face.",
        nuance: "Wait 3-5 minutes before the next step. Keep Luxe Organix 10% Niacinamide out of this slot.",
        timerLabel: "5 min wait",
        timerSeconds: 300
      },
      {
        action: "Tone",
        product: "Skin1004 Madagascar Centella Toning Toner",
        application: "Pour a few drops into your palms and pat into the skin.",
        nuance: "Centella helps cool post-gym skin."
      },
      {
        action: "Shield",
        product: "COSRX Advanced Snail 96 Mucin Essence",
        application: "Smooth 2 full pumps onto your face while it is still damp from toner.",
        nuance: "The extra hydration layer helps protect against dry indoor air."
      },
      {
        action: "Eyes",
        product: "Luxe Organix Bright Eyes Eye Cream",
        application: "Tap a pea-sized amount lightly around the orbital bone."
      },
      {
        action: "Seal",
        product: "Skin1004 Madagascar Centella Soothing Cream",
        application: "Smooth a dime-sized layer over your face as your final step.",
        nuance: "This gel-cream seals hydration while keeping the finish soft-matte."
      }
    ]
  }
};

const nightSchedule = {
  monday: {
    day: "Monday",
    title: "Sheet Mask + Deep Recovery Night",
    time: "2:00 AM",
    startsAt: 26,
    summary: "A deep recovery matrix night with sheet mask, peptides, PDRN, and niacinamide.",
    warnings: ["Do these steps immediately after logging off from your work shift."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Mask", "Aqua Lock - Hyaluronic Acid", "Apply for 15 minutes. Remove and pat in excess fluid.", "Use your preferred sheet mask.", 900),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump to damp skin."),
      step("Ampoule", "Skin1004 Madagascar Centella Ampoule", "Apply 1 full dropper."),
      step("Peptide", "GHK-Cu Serum", "Apply 3-4 drops and press gently.", "Copper peptides thrive on active-free recovery nights."),
      step("Repair", "Dr. Drawing PDRN Ampoule", "Layer next over peptides."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops across your face.", "Keep high-strength niacinamide isolated at night, away from the 5:00 PM Vitamin C."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to freeze hydration levels until morning.")
    ]
  },
  tuesday: {
    day: "Tuesday",
    title: "Recovery Night + Retinol Eye Care",
    time: "2:00 AM",
    startsAt: 26,
    summary: "A recovery matrix night with peptides, PDRN, niacinamide, and retinol eye cream.",
    warnings: ["Use retinol eye cream only around the orbital bone."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump to damp skin."),
      step("Ampoule", "Skin1004 Madagascar Centella Ampoule", "Apply 1 full dropper."),
      step("Peptide", "GHK-Cu Serum", "Apply 3-4 drops."),
      step("Repair", "Dr. Drawing PDRN Ampoule", "Layer over peptides."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops over your face."),
      step("Eyes", "Luxe Organix Retinol + Bakuchiol Eye Cream", "Tap gently around the eye area only."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  wednesday: {
    day: "Wednesday",
    title: "Pore-Clearing BHA Night",
    time: "2:00 AM",
    startsAt: 26,
    summary: "A matrix exfoliation night with BHA/PHA, calming centella, and hydration.",
    warnings: ["Do not use GHK-Cu or 10% Niacinamide with this BHA/PHA routine."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat completely dry."),
      step("Exfoliate", "Oxecure Blackhead Clearing BHA/PHA Toner", "Apply to your dry face. Wait 1 full minute.", "Avoid peptides and high-strength niacinamide tonight.", 60),
      step("Calm", "Skin1004 Madagascar Centella Ampoule", "Apply 1 full dropper to soothe the pore lining after exfoliation."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  thursday: {
    day: "Thursday",
    title: "Deep Retinol Night",
    time: "2:00 AM",
    startsAt: 26,
    summary: "The matrix retinol sandwich method with hydrating lotion, buffer cream, retinol, and seal.",
    warnings: ["Do not use GHK-Cu or 10% Niacinamide with this retinol routine."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Hydrate", "Hada Labo Premium Hydrating Lotion", "Pat onto damp skin."),
      step("Buffer", "Skin1004 Madagascar Centella Soothing Cream", "Apply a thin layer across your face first.", "This acts as a weightless protective buffer before retinol."),
      step("Retinol", "Luxe Organix ClinicalPRO Retinol 0.2%", "Smooth a pea-sized amount over the dry cream layer."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a final layer to lock down the treatment.")
    ]
  },
  friday: {
    day: "Friday",
    title: "Recovery Night + Retinol Eye Care",
    time: "2:00 AM",
    startsAt: 26,
    summary: "A second recovery matrix night with retinol eye care.",
    warnings: ["Use retinol eye cream only around the orbital bone."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump to damp skin."),
      step("Ampoule", "Skin1004 Madagascar Centella Ampoule", "Apply 1 full dropper."),
      step("Peptide", "GHK-Cu Serum", "Apply 3-4 drops."),
      step("Repair", "Dr. Drawing PDRN Ampoule", "Layer over peptides."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops over your face."),
      step("Eyes", "Luxe Organix Retinol + Bakuchiol Eye Cream", "Tap gently around the eyes only."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  saturday: {
    day: "Saturday",
    title: "Deep Radiance Glow Night",
    time: "2:00 AM",
    startsAt: 26,
    summary: "The matrix radiance night with EGF, centella, niacinamide, and sleeping mask.",
    warnings: ["Keep GHK-Cu out of this radiance night."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Glow", "Dr. Drawing EGF Whitening Ampoule", "Apply 1 dropper.", "Isolate copper peptide away from this whitening growth-factor ampoule."),
      step("Calm", "Skin1004 Madagascar Centella Ampoule", "Apply 1 full dropper."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops over your face."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  sunday: {
    day: "Sunday",
    title: "Pore Detox Clay Mask Night",
    time: "2:00 AM",
    startsAt: 26,
    summary: "A matrix detox night with clay mask, calming layers, and a hydration seal.",
    warnings: ["Avoid GHK-Cu and 10% Niacinamide immediately after the clay mask."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat completely dry."),
      step("Mask", "Skintific Mugwort Clay Mask", "Smooth a layer over oily zones. Wash off cleanly with warm water after 10 minutes. Pat dry.", "Your skin barrier can be vulnerable right after a deep clay mask.", 600),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Calm", "Skin1004 Madagascar Centella Ampoule", "Apply 1 full dropper to deeply calm skin."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to restore deep water moisture.")
    ]
  }
};

const defaultProductCatalog = [
  { category: "Cleansers", name: "Luxe Organix Whitening Repair Cleanser" },
  { category: "Cleansers", name: "Skin1004 Madagascar Centella Light Cleansing Oil" },
  { category: "Cleansers", name: "COSRX Low pH Good Morning Gel Cleanser" },
  { category: "Sunscreens", name: "Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+" },
  { category: "Sunscreens", name: "Biore UV Aqua Rich Watery Gel SPF50+ PA++++" },
  { category: "Toner / Lotion", name: "Skin1004 Madagascar Centella Toning Toner" },
  { category: "Toner / Lotion", name: "Hada Labo Premium Hydrating Lotion" },
  { category: "Essence", name: "COSRX Advanced Snail 96 Mucin Essence" },
  { category: "Serums", name: "Revox B77 Just Vitamin C 20%" },
  { category: "Serums", name: "GHK-Cu Serum" },
  { category: "Serums", name: "Luxe Organix 10% Niacinamide Serum" },
  { category: "Ampoules", name: "Skin1004 Madagascar Centella Ampoule" },
  { category: "Ampoules", name: "Dr. Drawing PDRN Ampoule" },
  { category: "Ampoules", name: "Dr. Drawing EGF Whitening Ampoule" },
  { category: "Actives / Treatments", name: "Luxe Organix ClinicalPRO Retinol 0.2%" },
  { category: "Actives / Treatments", name: "Oxecure Blackhead Clearing BHA/PHA Toner" },
  { category: "Eye Care", name: "Luxe Organix Bright Eyes Eye Cream" },
  { category: "Eye Care", name: "Luxe Organix Retinol + Bakuchiol Eye Cream" },
  { category: "Moisturizer / Seal", name: "Skin1004 Madagascar Centella Soothing Cream" },
  { category: "Moisturizer / Seal", name: "Neutrogena Hydro Boost 3D Sleeping Mask" },
  { category: "Sheet Masks", name: "Aqua Lock - Hyaluronic Acid" },
  { category: "Sheet Masks", name: "Cica Rescue - Centella Asiatica" },
  { category: "Sheet Masks", name: "Miracle Solutions - Acne Derm+" },
  { category: "Clay Masks", name: "Skintific Mugwort Clay Mask" },
  { category: "Clay Masks", name: "Dark Fading Spot Niacinamide Clay Mask - Pink" }
];

const defaultProductCategories = [...new Set(defaultProductCatalog.map((product) => product.category))];

const reminderDefinitions = {
  morning: {
    title: "Morning routine",
    defaultTime: "11:00",
    body: "Time to start your morning skincare."
  },
  postGym: {
    title: "Second routine",
    defaultTime: "17:00",
    body: "Your second routine slot is ready."
  },
  night: {
    title: "Night routine",
    defaultTime: "02:00",
    body: "Your 2 AM night routine is ready."
  }
};

let selectedRoutine = null;
let selectedDateKey = null;
let selectedProductCategory = "All";
let routineEditMode = false;
let historyCursor = new Date();
let installPrompt = null;
let timerInterval = null;
const reminderTimeouts = new Map();

const els = {
  todayLabel: document.querySelector("#todayLabel"),
  nextRoutineLabel: document.querySelector("#nextRoutineLabel"),
  heroTitle: document.querySelector("#heroTitle"),
  heroMeta: document.querySelector("#heroMeta"),
  startNextRoutine: document.querySelector("#startNextRoutine"),
  completedCount: document.querySelector("#completedCount"),
  activeDayName: document.querySelector("#activeDayName"),
  streakCount: document.querySelector("#streakCount"),
  todayGymControls: document.querySelector("#todayGymControls"),
  todayGymTitle: document.querySelector("#todayGymTitle"),
  todayGymHint: document.querySelector("#todayGymHint"),
  todayGymToggle: document.querySelector("#todayGymToggle"),
  todayCompleteBanner: document.querySelector("#todayCompleteBanner"),
  todayTemplateSelect: document.querySelector("#todayTemplateSelect"),
  addTodayTemplate: document.querySelector("#addTodayTemplate"),
  notificationStatus: document.querySelector("#notificationStatus"),
  notificationButton: document.querySelector("#notificationButton"),
  timerAlertToggle: document.querySelector("#timerAlertToggle"),
  timerAlertState: document.querySelector("#timerAlertState"),
  routineList: document.querySelector("#routineList"),
  weekGrid: document.querySelector("#weekGrid"),
  templateList: document.querySelector("#templateList"),
  historyMonthLabel: document.querySelector("#historyMonthLabel"),
  historySummary: document.querySelector("#historySummary"),
  historyGrid: document.querySelector("#historyGrid"),
  historyPrev: document.querySelector("#historyPrev"),
  historyToday: document.querySelector("#historyToday"),
  historyNext: document.querySelector("#historyNext"),
  categoryFilters: document.querySelector("#categoryFilters"),
  productList: document.querySelector("#productList"),
  productSearch: document.querySelector("#productSearch"),
  newProductName: document.querySelector("#newProductName"),
  newProductCategory: document.querySelector("#newProductCategory"),
  addProduct: document.querySelector("#addProduct"),
  routineSheet: document.querySelector("#routineSheet"),
  sheetTitle: document.querySelector("#sheetTitle"),
  sheetTime: document.querySelector("#sheetTime"),
  sheetWarnings: document.querySelector("#sheetWarnings"),
  stepList: document.querySelector("#stepList"),
  editRoutine: document.querySelector("#editRoutine"),
  resetRoutineEdits: document.querySelector("#resetRoutineEdits"),
  closeSheet: document.querySelector("#closeSheet"),
  installButton: document.querySelector("#installButton")
};

function step(action, product, application, nuance = "", timerSeconds = 0) {
  const result = { action, product, application };
  if (nuance) result.nuance = nuance;
  if (timerSeconds) {
    result.timerSeconds = timerSeconds;
    result.timerLabel = timerSeconds >= 600 ? `${Math.round(timerSeconds / 60)} min` : `${timerSeconds} sec`;
  }
  return result;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

function cloneStep(routineStep) {
  return {
    action: routineStep.action || "Step",
    product: routineStep.product || "Custom product",
    application: routineStep.application || "Apply as directed.",
    category: categoryForProduct(routineStep.product, routineStep.category),
    ...(routineStep.nuance ? { nuance: routineStep.nuance } : {}),
    ...(routineStep.timerSeconds ? { timerSeconds: routineStep.timerSeconds, timerLabel: routineStep.timerLabel || formatTimerLabel(routineStep.timerSeconds) } : {})
  };
}

function cleanRoutineStep(routineStep) {
  const seconds = Math.max(0, Math.round(Number(routineStep.timerSeconds || 0)));
  const clean = {
    action: String(routineStep.action || "").trim() || "Step",
    product: String(routineStep.product || "").trim() || "Custom product",
    application: String(routineStep.application || "").trim() || "Apply as directed.",
    category: categoryForProduct(routineStep.product, routineStep.category)
  };
  const nuance = String(routineStep.nuance || "").trim();
  if (nuance) clean.nuance = nuance;
  if (seconds) {
    clean.timerSeconds = seconds;
    clean.timerLabel = formatTimerLabel(seconds);
  }
  return clean;
}

function cleanRoutineMeta(routine) {
  const startsAt = Math.max(0, Math.min(26, Math.round(Number(routine.startsAt ?? 26))));
  return {
    title: String(routine.title || "").trim() || "Custom Routine",
    time: String(routine.time || "").trim() || "Anytime",
    startsAt,
    summary: String(routine.summary || "").trim() || "Your custom routine.",
    warnings: String(Array.isArray(routine.warnings) ? routine.warnings.join("\n") : routine.warnings || "")
      .split(/\r?\n/)
      .map((warning) => warning.trim())
      .filter(Boolean)
  };
}

const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function nightTemplateId(dayKey) {
  return `night-${dayKey}`;
}

function defaultScheduleForDay(dayKey) {
  const base = ["preGym"];
  if (!isWeekend(dayKey)) base.push("postGym");
  base.push(nightTemplateId(dayKey));
  return base;
}

function defaultWeeklySchedule() {
  return Object.fromEntries(dayOrder.map((dayKey) => [dayKey, defaultScheduleForDay(dayKey)]));
}

function routineTemplateLibrary() {
  return [
    { ...routines.preGym },
    { ...routines.postGym },
    ...dayOrder.map((dayKey) => ({
      id: nightTemplateId(dayKey),
      dayKey,
      summary: nightSchedule[dayKey].summary || "Your matrix night routine template.",
      ...nightSchedule[dayKey]
    }))
  ].map((routine) => applyRoutineOverride(routine));
}

function routineTemplateById(id) {
  const template = routineTemplateLibrary().find((routine) => routine.id === id);
  return template || null;
}

function validTemplateIds(ids) {
  const valid = new Set(routineTemplateLibrary().map((routine) => routine.id));
  return [...new Set((Array.isArray(ids) ? ids : []).filter((id) => valid.has(id)))];
}

function routineOverridesKey() {
  return "skinbuddy:template-overrides-v1";
}

function loadRoutineOverrides() {
  try {
    const overrides = JSON.parse(localStorage.getItem(routineOverridesKey()) || "{}");
    return overrides && typeof overrides === "object" ? overrides : {};
  } catch {
    return {};
  }
}

function saveRoutineOverrides(overrides) {
  localStorage.setItem(routineOverridesKey(), JSON.stringify(overrides));
}

function routineOverride(routineId) {
  return loadRoutineOverrides()[routineId] || null;
}

function hasRoutineOverride(routineId) {
  return Boolean(routineOverride(routineId));
}

function setRoutineOverride(routineId, routine) {
  const overrides = loadRoutineOverrides();
  overrides[routineId] = {
    ...cleanRoutineMeta(routine),
    steps: routine.steps.map(cleanRoutineStep)
  };
  saveRoutineOverrides(overrides);
}

function clearRoutineOverride(routineId) {
  const overrides = loadRoutineOverrides();
  delete overrides[routineId];
  saveRoutineOverrides(overrides);
}

function applyRoutineOverride(routine) {
  const override = routineOverride(routine.id);
  if (!override || !Array.isArray(override.steps) || !override.steps.length) {
    return {
      ...routine,
      ...cleanRoutineMeta(routine),
      steps: routine.steps.map(cloneStep)
    };
  }
  return {
    ...routine,
    ...cleanRoutineMeta({ ...routine, ...override }),
    steps: override.steps.map(cleanRoutineStep),
    isEdited: true
  };
}

function weeklyScheduleKey() {
  return "skinbuddy:weekly-schedule-v1";
}

function loadWeeklySchedule() {
  const defaults = defaultWeeklySchedule();
  try {
    const stored = JSON.parse(localStorage.getItem(weeklyScheduleKey()) || "null");
    return Object.fromEntries(
      dayOrder.map((dayKey) => {
        const ids = validTemplateIds(stored?.[dayKey]);
        return [dayKey, ids.length ? ids : defaults[dayKey]];
      })
    );
  } catch {
    return defaults;
  }
}

function saveWeeklySchedule(schedule) {
  localStorage.setItem(weeklyScheduleKey(), JSON.stringify(schedule));
}

function scheduledTemplateIds(dayKey) {
  return loadWeeklySchedule()[dayKey] || defaultScheduleForDay(dayKey);
}

function setScheduledTemplateIds(dayKey, ids) {
  const schedule = loadWeeklySchedule();
  const cleanIds = validTemplateIds(ids);
  schedule[dayKey] = cleanIds.length ? cleanIds : defaultScheduleForDay(dayKey);
  saveWeeklySchedule(schedule);
}

function dateScheduleOverridesKey() {
  return "skinbuddy:date-schedule-overrides-v1";
}

function loadDateScheduleOverrides() {
  try {
    const overrides = JSON.parse(localStorage.getItem(dateScheduleOverridesKey()) || "{}");
    return overrides && typeof overrides === "object" ? overrides : {};
  } catch {
    return {};
  }
}

function saveDateScheduleOverrides(overrides) {
  localStorage.setItem(dateScheduleOverridesKey(), JSON.stringify(overrides));
}

function getDayTemplateIds(date = new Date()) {
  const key = dateKey(date);
  const overrides = loadDateScheduleOverrides();
  const dayKey = getDayKey(date);
  const overrideIds = validTemplateIds(overrides[key]);
  return overrideIds.length ? overrideIds : scheduledTemplateIds(dayKey);
}

function setTodayTemplateIds(ids) {
  const key = activeSkincareDayKey();
  const overrides = loadDateScheduleOverrides();
  const cleanIds = validTemplateIds(ids);
  if (cleanIds.length) overrides[key] = cleanIds;
  else delete overrides[key];
  saveDateScheduleOverrides(overrides);
}

function dateKey(date) {
  return date.toLocaleDateString("en-CA");
}

function todayKey() {
  return dateKey(new Date());
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(date.getDate() + amount);
  return next;
}

function firstActiveKey() {
  const key = "skinbuddy:first-active-key";
  const stored = localStorage.getItem(key);
  if (stored) return stored;
  const loggedKeys = Object.keys(localStorage)
    .map((item) => item.match(/^skinbuddy:(\d{4}-\d{2}-\d{2}):/)?.[1])
    .filter(Boolean)
    .sort();
  const current = loggedKeys[0] || todayKey();
  localStorage.setItem(key, current);
  return current;
}

function activeSkincareDayKey() {
  const current = todayKey();
  const first = firstActiveKey();
  const previous = dateKey(addDays(dateFromKey(current), -1));
  if (previous >= first && !isDayComplete(previous)) return previous;
  return current;
}

function activeSkincareDate() {
  return dateFromKey(activeSkincareDayKey());
}

function getDayKey(date = new Date()) {
  return date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
}

function dateFromKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getCurrentWeekDates() {
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = new Date(today);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(today.getDate() - mondayOffset);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}

function isWeekend(dayKey) {
  return dayKey === "saturday" || dayKey === "sunday";
}

function gymSettingKey(dayKey) {
  return `skinbuddy:gym:${dayKey}`;
}

function isGymDay(date = new Date()) {
  const dayKey = getDayKey(date);
  if (!isWeekend(dayKey)) return true;
  return scheduledTemplateIds(dayKey).includes("postGym");
}

function setGymDay(dayKey, enabled) {
  localStorage.setItem(gymSettingKey(dayKey), enabled ? "1" : "0");
  if (!isWeekend(dayKey)) return;
  const ids = scheduledTemplateIds(dayKey).filter((id) => id !== "postGym");
  const nextIds = enabled ? [ids[0] || "preGym", "postGym", ...ids.slice(1)] : ids;
  setScheduledTemplateIds(dayKey, nextIds);
}

function getNightRoutine(date = new Date()) {
  const item = nightSchedule[getDayKey(date)];
  return applyRoutineOverride({
    id: `night-${getDayKey(date)}`,
    summary: item.summary || "Your night routine slot.",
    ...item
  });
}

function getDayRoutines(date = new Date()) {
  return getDayTemplateIds(date)
    .map(routineTemplateById)
    .filter(Boolean);
}

function getTodayRoutines() {
  return getDayRoutines(activeSkincareDate());
}

function getNextRoutine() {
  const activeKey = activeSkincareDayKey();
  const list = [...getTodayRoutines()].sort((first, second) => (first.startsAt ?? 26) - (second.startsAt ?? 26));
  if (activeKey !== todayKey()) {
    return list.find((routine) => routineProgress(routine, activeKey).done < routine.steps.length) || list[list.length - 1];
  }
  const hour = new Date().getHours();
  return list.find((routine) => hour < (routine.startsAt ?? 26)) || list[0];
}

function storageKey(routineId, index, key = todayKey()) {
  return `skinbuddy:${key}:${routineId}:${index}`;
}

function isDone(routineId, index, key = todayKey()) {
  return localStorage.getItem(storageKey(routineId, index, key)) === "1";
}

function setDone(routineId, index, done, key = todayKey()) {
  localStorage.setItem(storageKey(routineId, index, key), done ? "1" : "0");
}

function routineProgress(routine, key = todayKey()) {
  const done = routine.steps.filter((_, index) => isDone(routine.id, index, key)).length;
  return { done, total: routine.steps.length, percent: Math.round((done / routine.steps.length) * 100) };
}

function dayProgress(key = todayKey()) {
  const routinesForDate = getDayRoutines(dateFromKey(key));
  return routinesForDate.reduce(
    (summary, routine) => {
      const progress = routineProgress(routine, key);
      return {
        done: summary.done + progress.done,
        total: summary.total + progress.total
      };
    },
    { done: 0, total: 0 }
  );
}

function isDayComplete(key = todayKey()) {
  const progress = dayProgress(key);
  return progress.total > 0 && progress.done === progress.total;
}

function defaultReminderSettings() {
  return {
    timers: false,
    routines: Object.fromEntries(
      Object.entries(reminderDefinitions).map(([id, definition]) => [
        id,
        {
          enabled: false,
          time: definition.defaultTime
        }
      ])
    )
  };
}

function reminderSettingsKey() {
  return "skinbuddy:reminders";
}

function loadReminderSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(reminderSettingsKey()) || "null");
    const defaults = defaultReminderSettings();
    return {
      timers: Boolean(stored?.timers),
      routines: Object.fromEntries(
        Object.entries(defaults.routines).map(([id, config]) => [
          id,
          {
            enabled: Boolean(stored?.routines?.[id]?.enabled),
            time: stored?.routines?.[id]?.time || config.time
          }
        ])
      )
    };
  } catch {
    return defaultReminderSettings();
  }
}

function saveReminderSettings(settings) {
  localStorage.setItem(reminderSettingsKey(), JSON.stringify(settings));
}

function notificationPermission() {
  if (!("Notification" in window)) return "unsupported";
  return Notification.permission;
}

async function requestNotificationPermission() {
  if (!("Notification" in window)) return "unsupported";
  if (Notification.permission === "default") return Notification.requestPermission();
  return Notification.permission;
}

async function showSkinBuddyNotification(title, options = {}) {
  if (notificationPermission() !== "granted") return false;
  const payload = {
    badge: "assets/icon.svg",
    icon: "assets/icon.svg",
    tag: options.tag || "skinbuddy",
    renotify: Boolean(options.renotify),
    data: {
      url: "./",
      ...(options.data || {})
    },
    body: options.body || ""
  };
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    await registration.showNotification(title, payload);
    return true;
  }
  new Notification(title, payload);
  return true;
}

function reminderLastSentKey(id, key = todayKey()) {
  return `skinbuddy:reminder-sent:${key}:${id}`;
}

function timerNotifiedKey(routineId, index, key = todayKey()) {
  return `skinbuddy:timer-notified:${key}:${routineId}:${index}`;
}

function nextReminderDate(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  const next = new Date();
  next.setHours(hours || 0, minutes || 0, 0, 0);
  if (next <= new Date()) next.setDate(next.getDate() + 1);
  return next;
}

function scheduleRoutineReminder(id, config) {
  clearTimeout(reminderTimeouts.get(id));
  reminderTimeouts.delete(id);
  if (!config.enabled || notificationPermission() !== "granted") return;
  const target = nextReminderDate(config.time);
  const delay = target.getTime() - Date.now();
  const timeout = setTimeout(async () => {
    const key = dateKey(new Date());
    if (localStorage.getItem(reminderLastSentKey(id, key)) !== "1") {
      await showSkinBuddyNotification(reminderDefinitions[id].title, {
        body: reminderDefinitions[id].body,
        tag: `skinbuddy-reminder-${id}`,
        renotify: true,
        data: { reminder: id }
      });
      localStorage.setItem(reminderLastSentKey(id, key), "1");
    }
    scheduleRoutineReminder(id, loadReminderSettings().routines[id]);
  }, delay);
  reminderTimeouts.set(id, timeout);
}

function scheduleSmartReminders() {
  const settings = loadReminderSettings();
  Object.entries(settings.routines).forEach(([id, config]) => scheduleRoutineReminder(id, config));
}

function renderReminderControls() {
  const permission = notificationPermission();
  const settings = loadReminderSettings();
  const statusMap = {
    granted: "Notifications on",
    denied: "Notifications blocked",
    default: "Notifications off",
    unsupported: "Notifications unavailable"
  };
  els.notificationStatus.textContent = statusMap[permission] || "Notifications off";
  els.notificationButton.textContent = permission === "granted" ? "Test" : "Enable";
  els.notificationButton.disabled = permission === "denied" || permission === "unsupported";
  Object.entries(settings.routines).forEach(([id, config]) => {
    const toggle = document.querySelector(`[data-reminder-toggle="${id}"]`);
    const time = document.querySelector(`[data-reminder-time="${id}"]`);
    if (toggle) toggle.checked = config.enabled;
    if (time) {
      time.value = config.time;
      time.disabled = !config.enabled;
    }
  });
  els.timerAlertToggle.checked = settings.timers;
  els.timerAlertState.textContent = settings.timers ? "On" : "Off";
}

function updateReminderSetting(id, patch) {
  const settings = loadReminderSettings();
  settings.routines[id] = {
    ...settings.routines[id],
    ...patch
  };
  saveReminderSettings(settings);
  renderReminderControls();
  scheduleSmartReminders();
}

function updateTimerAlertSetting(enabled) {
  const settings = loadReminderSettings();
  settings.timers = enabled;
  saveReminderSettings(settings);
  renderReminderControls();
}

function updateStats() {
  const key = activeSkincareDayKey();
  const routinesToday = getTodayRoutines();
  const completed = routinesToday.reduce((sum, routine) => sum + routineProgress(routine, key).done, 0);
  els.completedCount.textContent = completed;
  els.activeDayName.textContent = nightSchedule[getDayKey(activeSkincareDate())].day.slice(0, 3);
  els.streakCount.textContent = calculateStreak();
}

function calculateStreak() {
  let streak = 0;
  for (let offset = 0; offset < 14; offset += 1) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const key = date.toLocaleDateString("en-CA");
    const hasAny = Object.keys(localStorage).some((item) => item.startsWith(`skinbuddy:${key}:`) && localStorage.getItem(item) === "1");
    if (!hasAny) break;
    streak += 1;
  }
  return streak;
}

function renderHero() {
  const key = activeSkincareDayKey();
  const activeDate = dateFromKey(key);
  const next = getNextRoutine();
  const progress = routineProgress(next, key);
  const activeLabel = activeDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric"
  });
  els.todayLabel.textContent = key === todayKey() ? activeLabel : `${activeLabel} skincare day`;
  els.nextRoutineLabel.textContent = next.time;
  els.heroTitle.textContent = next.title;
  els.heroMeta.textContent = `${progress.done}/${progress.total} complete - ${next.summary}`;
  els.startNextRoutine.onclick = () => openRoutine(next.id, key);
}

function renderToday() {
  const key = activeSkincareDayKey();
  const activeDate = dateFromKey(key);
  const dayKey = getDayKey(activeDate);
  const weekendToday = isWeekend(dayKey);
  els.todayGymControls.hidden = !weekendToday;
  if (weekendToday) {
    const enabled = isGymDay(activeDate);
    els.todayGymToggle.checked = enabled;
    els.todayGymTitle.textContent = `${nightSchedule[dayKey].day} full routine day`;
    els.todayGymHint.textContent = enabled ? "Show all routine slots" : "Use the simplified weekend routine slots";
  }
  els.todayCompleteBanner.hidden = !isDayComplete(key);
  const templates = routineTemplateLibrary();
  const scheduledIds = new Set(getDayTemplateIds(activeDate));
  const availableTemplates = templates.filter((template) => !scheduledIds.has(template.id));
  const templateOptions = (availableTemplates.length ? availableTemplates : templates).map((template) => ({
    value: template.id,
    label: template.title
  }));
  els.todayTemplateSelect.innerHTML = templateOptions
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
    .join("");
  els.addTodayTemplate.disabled = !availableTemplates.length;
  els.addTodayTemplate.textContent = availableTemplates.length ? "Add" : "Added";
  els.routineList.innerHTML = "";
  getTodayRoutines().forEach((routine) => {
    const progress = routineProgress(routine, key);
    const card = document.createElement("article");
    card.className = "routine-card";
    card.innerHTML = `
      <div class="routine-head">
        <div>
          <p class="eyebrow">${routine.time}</p>
          <h3>${routine.title}</h3>
          <p class="routine-meta">${routine.summary}</p>
        </div>
        <span class="pill">${progress.done}/${progress.total}</span>
      </div>
      <div class="routine-progress" aria-label="${progress.percent}% complete"><span style="width: ${progress.percent}%"></span></div>
      <div class="routine-actions">
        <button class="primary-action" type="button" data-open="${routine.id}" data-date="${key}">Open</button>
        <button class="secondary-action" type="button" data-reset="${routine.id}" data-date="${key}">Reset</button>
      </div>
    `;
    els.routineList.append(card);
  });
}

function renderSchedule() {
  els.weekGrid.innerHTML = "";
  const currentDate = activeSkincareDayKey();
  getCurrentWeekDates().forEach((date) => {
    const key = getDayKey(date);
    const routinesForDate = scheduledTemplateIds(key).map(routineTemplateById).filter(Boolean);
    const scheduleDateKey = dateKey(date);
    const progress = routinesForDate.reduce((sum, routine) => sum + routineProgress(routine, scheduleDateKey).done, 0);
    const total = routinesForDate.reduce((sum, routine) => sum + routine.steps.length, 0);
    const card = document.createElement("article");
    card.className = `day-card${scheduleDateKey === currentDate ? " is-current" : ""}`;
    card.innerHTML = `
      <div class="day-top">
        <div>
          <p class="eyebrow">${nightSchedule[key].day} - ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
          <h3>${routinesForDate.length} routine${routinesForDate.length === 1 ? "" : "s"}</h3>
          <p class="day-meta">${routinesForDate.length} routines - ${progress}/${total} steps logged</p>
        </div>
        <span class="badge">${isGymDay(date) ? "full day" : "simple day"}</span>
      </div>
      <div class="mini-list">
        ${routinesForDate.map((routine) => `<span>${routine.title}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openDay(scheduleDateKey));
    els.weekGrid.append(card);
  });

  els.templateList.innerHTML = "";
  routineTemplateLibrary().forEach((template) => {
    const card = document.createElement("article");
    card.className = "template-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">${template.time}</p>
        <h3>${escapeHtml(template.title)}</h3>
        <p class="routine-meta">${escapeHtml(template.summary)}</p>
      </div>
      <div class="template-card-foot">
        <span class="pill">${template.steps.length} steps</span>
        <button class="secondary-action" type="button" data-open-template="${escapeHtml(template.id)}">Edit</button>
      </div>
    `;
    els.templateList.append(card);
  });
}

function monthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function monthEnd(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function monthGridDates(date) {
  const start = monthStart(date);
  const end = monthEnd(date);
  const leadDays = (start.getDay() + 6) % 7;
  const gridStart = addDays(start, -leadDays);
  const totalDays = leadDays + end.getDate();
  const visibleDays = Math.ceil(totalDays / 7) * 7;
  return Array.from({ length: visibleDays }, (_, index) => addDays(gridStart, index));
}

function historyStatus(key, progress) {
  if (progress.total > 0 && progress.done === progress.total) return "complete";
  if (progress.done > 0) return "partial";
  if (key < firstActiveKey()) return "empty";
  if (key < todayKey()) return "missed";
  if (key === todayKey()) return "today";
  return "upcoming";
}

function historyStatusLabel(status) {
  return {
    complete: "Complete",
    partial: "Partial",
    missed: "Missed",
    today: "Today",
    upcoming: "Upcoming",
    empty: "No data"
  }[status];
}

function renderHistory() {
  const cursor = monthStart(historyCursor);
  const monthDates = monthGridDates(cursor);
  const monthKey = cursor.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const currentMonth = cursor.getMonth();
  const stats = {
    complete: 0,
    partial: 0,
    missed: 0
  };

  els.historyMonthLabel.textContent = monthKey;
  els.historyGrid.innerHTML = "";

  monthDates.forEach((date) => {
    const key = dateKey(date);
    const progress = dayProgress(key);
    const status = historyStatus(key, progress);
    const inMonth = date.getMonth() === currentMonth;
    if (inMonth && stats[status] !== undefined) stats[status] += 1;

    const button = document.createElement("button");
    button.className = `calendar-day ${status}${inMonth ? "" : " is-outside"}${key === activeSkincareDayKey() ? " is-active-day" : ""}`;
    button.type = "button";
    button.dataset.historyDate = key;
    button.innerHTML = `
      <strong>${date.getDate()}</strong>
      <span>${progress.done}/${progress.total}</span>
      <small>${historyStatusLabel(status)}</small>
    `;
    els.historyGrid.append(button);
  });

  els.historySummary.innerHTML = `
    <span><strong>${stats.complete}</strong> complete</span>
    <span><strong>${stats.partial}</strong> partial</span>
    <span><strong>${stats.missed}</strong> missed</span>
  `;
}

function productCatalogKey() {
  return "skinbuddy:product-catalog-v2";
}

function cleanProduct(product) {
  return {
    name: String(product.name || "").trim(),
    category: String(product.category || "Routine product").trim() || "Routine product"
  };
}

function loadProductCatalog() {
  try {
    const stored = localStorage.getItem(productCatalogKey());
    if (!stored) return defaultProductCatalog.map(cleanProduct);
    const products = JSON.parse(stored);
    if (!Array.isArray(products)) return defaultProductCatalog.map(cleanProduct);
    return products.map(cleanProduct).filter((product) => product.name);
  } catch {
    return defaultProductCatalog.map(cleanProduct);
  }
}

function saveProductCatalog(products) {
  localStorage.setItem(
    productCatalogKey(),
    JSON.stringify(products.map(cleanProduct).filter((product) => product.name))
  );
}

function productLibrary() {
  return loadProductCatalog();
}

function categoryForProduct(name, fallback = "") {
  return productLibrary().find((product) => product.name === name)?.category || fallback || "Routine product";
}

function addCatalogProduct(name, category) {
  const cleanName = name.trim();
  if (!cleanName) return;
  const products = productLibrary().filter((product) => product.name.toLowerCase() !== cleanName.toLowerCase());
  products.push({ name: cleanName, category: category || "Routine product" });
  saveProductCatalog(products.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name)));
}

function deleteCatalogProduct(name) {
  saveProductCatalog(productLibrary().filter((product) => product.name !== name));
}

function productOptionsForCategory(category, currentProduct = "") {
  const options = productLibrary()
    .filter((item) => item.category === category)
    .map((item) => item.name)
    .sort((a, b) => a.localeCompare(b));
  if (currentProduct && !options.includes(currentProduct)) options.unshift(currentProduct);
  return options;
}

function selectOptions(options, selected) {
  return options
    .map((option) => `<option value="${escapeHtml(option)}"${option === selected ? " selected" : ""}>${escapeHtml(option)}</option>`)
    .join("");
}

function productCategoriesList() {
  return ["All", ...new Set([...defaultProductCategories, ...productLibrary().map((item) => item.category)].sort((a, b) => a.localeCompare(b)))];
}

function editableProductCategories() {
  return productCategoriesList().filter((category) => category !== "All");
}

function renderAddProductControls() {
  const current = els.newProductCategory.value || selectedProductCategory;
  const categories = editableProductCategories();
  if (!categories.includes(current) && current !== "All") categories.push(current);
  els.newProductCategory.innerHTML = selectOptions(categories.sort((a, b) => a.localeCompare(b)), current === "All" ? categories[0] : current);
}

function renderCategoryFilters() {
  els.categoryFilters.innerHTML = "";
  productCategoriesList().forEach((category) => {
    const button = document.createElement("button");
    button.className = `category-chip${category === selectedProductCategory ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.category = category;
    button.textContent = category;
    els.categoryFilters.append(button);
  });
}

function renderProducts() {
  const query = els.productSearch.value.trim().toLowerCase();
  renderCategoryFilters();
  renderAddProductControls();
  els.productList.innerHTML = "";
  productLibrary()
    .filter((item) => selectedProductCategory === "All" || item.category === selectedProductCategory)
    .filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(query))
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
    .forEach((item) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-top">
          <div>
            <p class="eyebrow">${escapeHtml(item.category)}</p>
            <h3>${escapeHtml(item.name)}</h3>
          </div>
        </div>
        <div class="product-actions">
          <button class="secondary-action quiet" type="button" data-delete-product="${escapeHtml(item.name)}">Delete</button>
        </div>
      `;
      els.productList.append(card);
    });
}

function routineById(id, key = todayKey()) {
  const match = getDayRoutines(dateFromKey(key)).find((routine) => routine.id === id);
  return match || routineTemplateById(id) || getNextRoutine();
}

function openDay(key) {
  const date = dateFromKey(key);
  const dayKey = getDayKey(date);
  selectedRoutine = null;
  selectedDateKey = key;
  routineEditMode = false;
  els.sheetTitle.textContent = `${nightSchedule[dayKey].day} Routines`;
  els.sheetTime.textContent = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  updateRoutineEditControls();
  renderWarnings({
    warnings: isGymDay(date)
      ? ["Full day is on, so this date includes all routine slots."]
      : ["Simple day is on, so this date uses the lighter weekend routine slots."]
  });
  renderDayRoutineCards(key);
  els.routineSheet.classList.add("is-open");
  els.routineSheet.setAttribute("aria-hidden", "false");
}

function renderDayRoutineCards(key) {
  const date = dateFromKey(key);
  const dayKey = getDayKey(date);
  const routinesForDate = scheduledTemplateIds(dayKey).map(routineTemplateById).filter(Boolean);
  els.stepList.innerHTML = "";
  const scheduleEditor = document.createElement("section");
  scheduleEditor.className = "day-schedule-editor";
  const templateOptions = routineTemplateLibrary()
    .map((template) => `<option value="${escapeHtml(template.id)}">${escapeHtml(template.title)}</option>`)
    .join("");
  scheduleEditor.innerHTML = `
    <div class="edit-banner">
      <strong>Edit day schedule</strong>
      <span>Add, remove, or reorder the templates used for this weekday.</span>
    </div>
    <div class="template-picker-actions">
      <select data-day-template-select aria-label="Choose template">${templateOptions}</select>
      <button class="secondary-action" type="button" data-day-add-template="${dayKey}">Add</button>
    </div>
    <div class="scheduled-template-list">
      ${routinesForDate
        .map(
          (routine, index) => `
            <div class="scheduled-template-row">
              <div>
                <strong>${escapeHtml(routine.title)}</strong>
                <span>${escapeHtml(routine.time)} - ${routine.steps.length} steps</span>
              </div>
              <div class="scheduled-template-actions">
                <button class="secondary-action quiet" type="button" data-move-day-template="${index}" data-day="${dayKey}" data-direction="-1" ${index === 0 ? "disabled" : ""}>Up</button>
                <button class="secondary-action quiet" type="button" data-move-day-template="${index}" data-day="${dayKey}" data-direction="1" ${index === routinesForDate.length - 1 ? "disabled" : ""}>Down</button>
                <button class="secondary-action quiet" type="button" data-remove-day-template="${index}" data-day="${dayKey}" ${routinesForDate.length <= 1 ? "disabled" : ""}>Delete</button>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  els.stepList.append(scheduleEditor);
  if (isDayComplete(key)) {
    const banner = document.createElement("div");
    banner.className = "complete-banner";
    banner.innerHTML = "<strong>Day complete</strong><span>All routines for this day are logged.</span>";
    els.stepList.append(banner);
  }
  routinesForDate.forEach((routine) => {
    const progress = routineProgress(routine, key);
    const card = document.createElement("article");
    card.className = "routine-card";
    card.innerHTML = `
      <div class="routine-head">
        <div>
          <p class="eyebrow">${routine.time}</p>
          <h3>${routine.title}</h3>
          <p class="routine-meta">${routine.summary}</p>
        </div>
        <span class="pill">${progress.done}/${progress.total}</span>
      </div>
      <div class="routine-progress" aria-label="${progress.percent}% complete"><span style="width: ${progress.percent}%"></span></div>
      <div class="routine-actions">
        <button class="primary-action" type="button" data-open="${routine.id}" data-date="${key}">Log</button>
        <button class="secondary-action" type="button" data-reset="${routine.id}" data-date="${key}">Reset</button>
      </div>
    `;
    els.stepList.append(card);
  });
}

function openTemplate(id) {
  selectedRoutine = routineTemplateById(id);
  if (!selectedRoutine) return;
  selectedDateKey = todayKey();
  routineEditMode = true;
  updateSheetRoutineHeader(selectedRoutine, selectedDateKey);
  updateRoutineEditControls(selectedRoutine);
  renderWarnings(selectedRoutine);
  renderSteps(selectedRoutine);
  els.routineSheet.classList.add("is-open");
  els.routineSheet.setAttribute("aria-hidden", "false");
}

function openRoutine(id, key = todayKey()) {
  selectedRoutine = routineById(id, key);
  selectedDateKey = key;
  routineEditMode = false;
  updateSheetRoutineHeader(selectedRoutine, key);
  updateRoutineEditControls(selectedRoutine);
  renderWarnings(selectedRoutine);
  renderSteps(selectedRoutine);
  els.routineSheet.classList.add("is-open");
  els.routineSheet.setAttribute("aria-hidden", "false");
}

function updateSheetRoutineHeader(routine, key = selectedDateKey || todayKey()) {
  els.sheetTitle.textContent = routine.title;
  els.sheetTime.textContent = `${routine.time} - ${dateFromKey(key).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
}

function closeRoutine() {
  routineEditMode = false;
  updateRoutineEditControls();
  els.routineSheet.classList.remove("is-open");
  els.routineSheet.setAttribute("aria-hidden", "true");
}

function updateRoutineEditControls(routine = selectedRoutine) {
  const hasRoutine = Boolean(routine);
  els.editRoutine.hidden = !hasRoutine;
  els.resetRoutineEdits.hidden = !hasRoutine || !hasRoutineOverride(routine.id);
  els.editRoutine.textContent = routineEditMode ? "Save" : "Edit";
}

function renderWarnings(routine) {
  els.sheetWarnings.innerHTML = "";
  (routine.warnings || []).forEach((warning) => {
    const item = document.createElement("p");
    item.className = "warning";
    item.textContent = warning;
    els.sheetWarnings.append(item);
  });
}

function renderSteps(routine) {
  els.stepList.innerHTML = "";
  updateRoutineEditControls(routine);
  if (routineEditMode) {
    renderRoutineEditor(routine);
    return;
  }
  routine.steps.forEach((routineStep, index) => {
    const done = isDone(routine.id, index, selectedDateKey || todayKey());
    const row = document.createElement("article");
    row.className = `step-row${done ? " is-done" : ""}`;
    row.innerHTML = `
      <button class="step-check" type="button" aria-label="Toggle ${routineStep.action}" data-step="${index}">${done ? "OK" : ""}</button>
      <div class="step-body">
        <div class="step-title">
          <strong>${index + 1}. ${routineStep.action}</strong>
          <span class="badge">${escapeHtml(categoryForProduct(routineStep.product, routineStep.category))}</span>
        </div>
        <p class="step-text"><strong>${escapeHtml(routineStep.product)}</strong><br>${escapeHtml(routineStep.application)}</p>
        ${routineStep.nuance ? `<p class="step-note">${escapeHtml(routineStep.nuance)}</p>` : ""}
        ${routineStep.timerSeconds ? timerMarkup(routine.id, index, routineStep) : ""}
      </div>
    `;
    els.stepList.append(row);
  });
}

function renderRoutineEditor(routine) {
  const help = document.createElement("div");
  help.className = "edit-banner";
  help.innerHTML = "<strong>Edit routine</strong><span>Change the title, time, notes, products, steps, and timers. Save when finished.</span>";
  els.stepList.append(help);

  const meta = cleanRoutineMeta(routine);
  const details = document.createElement("article");
  details.className = "routine-edit-step routine-edit-meta";
  details.innerHTML = `
    <div class="edit-step-head">
      <strong>Routine details</strong>
    </div>
    <label>
      <span>Routine name</span>
      <input type="text" value="${escapeHtml(meta.title)}" data-routine-field="title">
    </label>
    <label>
      <span>Display time</span>
      <input type="text" value="${escapeHtml(meta.time)}" data-routine-field="time">
    </label>
    <label>
      <span>Sort hour</span>
      <input type="number" min="0" max="26" step="1" value="${meta.startsAt}" data-routine-field="startsAt">
    </label>
    <label>
      <span>Summary</span>
      <textarea rows="2" data-routine-field="summary">${escapeHtml(meta.summary)}</textarea>
    </label>
    <label>
      <span>Notes or warnings</span>
      <textarea rows="3" placeholder="Optional, one per line" data-routine-field="warnings">${escapeHtml(meta.warnings.join("\n"))}</textarea>
    </label>
  `;
  els.stepList.append(details);

  routine.steps.forEach((routineStep, index) => {
    els.stepList.append(createRoutineEditRow(routineStep, index, routine.steps.length));
  });

  const actions = document.createElement("div");
  actions.className = "edit-footer";
  const positionOptions = Array.from({ length: routine.steps.length + 1 }, (_, index) => {
    const label = index === routine.steps.length ? `After step ${routine.steps.length}` : `Before step ${index + 1}`;
    return `<option value="${index}"${index === routine.steps.length ? " selected" : ""}>${label}</option>`;
  }).join("");
  actions.innerHTML = `
    <label class="insert-control">
      <span>Insert step</span>
      <select data-add-step-position>${positionOptions}</select>
    </label>
    <button class="secondary-action" type="button" data-add-edit-step>Add</button>
    <button class="secondary-action quiet" type="button" data-cancel-routine-edit>Cancel</button>
  `;
  els.stepList.append(actions);
}

function createRoutineEditRow(routineStep, index, totalSteps) {
  const row = document.createElement("article");
  row.className = "routine-edit-step";
  row.dataset.editIndex = index;
  const currentCategory = categoryForProduct(routineStep.product, routineStep.category);
  const categoryOptions = editableProductCategories();
  if (!categoryOptions.includes(currentCategory)) categoryOptions.push(currentCategory);
  const productOptions = productOptionsForCategory(currentCategory, routineStep.product);
  row.innerHTML = `
    <div class="edit-step-head">
      <strong>Step ${index + 1}</strong>
      <div class="edit-step-actions">
        <button class="secondary-action quiet" type="button" data-move-edit-step="${index}" data-direction="-1" ${index === 0 ? "disabled" : ""}>Up</button>
        <button class="secondary-action quiet" type="button" data-move-edit-step="${index}" data-direction="1" ${index === totalSteps - 1 ? "disabled" : ""}>Down</button>
        <button class="secondary-action quiet" type="button" data-delete-edit-step="${index}" ${totalSteps <= 1 ? "disabled" : ""}>Delete</button>
      </div>
    </div>
    <label>
      <span>Action</span>
      <input type="text" value="${escapeHtml(routineStep.action)}" data-edit-field="action">
    </label>
    <label>
      <span>Category</span>
      <select data-edit-field="category">${selectOptions(categoryOptions.sort((a, b) => a.localeCompare(b)), currentCategory)}</select>
    </label>
    <label>
      <span>Product</span>
      <select data-edit-field="product">${selectOptions(productOptions, routineStep.product)}</select>
    </label>
    <label>
      <span>Application</span>
      <textarea rows="3" data-edit-field="application">${escapeHtml(routineStep.application)}</textarea>
    </label>
    <label>
      <span>Note</span>
      <textarea rows="2" placeholder="Optional" data-edit-field="nuance">${escapeHtml(routineStep.nuance || "")}</textarea>
    </label>
    <label>
      <span>Wait timer, minutes</span>
      <input type="number" min="0" step="1" value="${routineStep.timerSeconds ? Math.round(routineStep.timerSeconds / 60) : 0}" data-edit-field="timerMinutes">
    </label>
  `;
  return row;
}

function collectRoutineEditorSteps() {
  return [...els.stepList.querySelectorAll(".routine-edit-step:not(.routine-edit-meta)")].map((row) => {
    const field = (name) => row.querySelector(`[data-edit-field="${name}"]`)?.value || "";
    return cleanRoutineStep({
      action: field("action"),
      product: field("product"),
      category: field("category"),
      application: field("application"),
      nuance: field("nuance"),
      timerSeconds: Number(field("timerMinutes") || 0) * 60
    });
  });
}

function collectRoutineEditorMeta() {
  const field = (name) => els.stepList.querySelector(`[data-routine-field="${name}"]`)?.value || "";
  return cleanRoutineMeta({
    title: field("title"),
    time: field("time"),
    startsAt: field("startsAt"),
    summary: field("summary"),
    warnings: field("warnings")
  });
}

function updateRoutineEditorProductSelect(row) {
  const category = row.querySelector('[data-edit-field="category"]')?.value || "Routine product";
  const productSelect = row.querySelector('[data-edit-field="product"]');
  if (!productSelect) return;
  const currentProduct = productSelect.value;
  const options = productOptionsForCategory(category, currentProduct);
  productSelect.innerHTML = selectOptions(options, options.includes(currentProduct) ? currentProduct : options[0]);
}

function saveRoutineEdits() {
  if (!selectedRoutine) return;
  const steps = collectRoutineEditorSteps();
  setRoutineOverride(selectedRoutine.id, {
    ...selectedRoutine,
    ...collectRoutineEditorMeta(),
    steps
  });
  selectedRoutine = routineById(selectedRoutine.id, selectedDateKey || todayKey());
  routineEditMode = false;
  updateSheetRoutineHeader(selectedRoutine);
  renderWarnings(selectedRoutine);
  renderSteps(selectedRoutine);
  refresh();
}

function cancelRoutineEdit() {
  if (!selectedRoutine) return;
  selectedRoutine = routineById(selectedRoutine.id, selectedDateKey || todayKey());
  routineEditMode = false;
  updateSheetRoutineHeader(selectedRoutine);
  renderWarnings(selectedRoutine);
  renderSteps(selectedRoutine);
}

function rebuildRoutineEditor(nextSteps) {
  selectedRoutine = {
    ...selectedRoutine,
    ...collectRoutineEditorMeta(),
    steps: nextSteps.length ? nextSteps.map(cleanRoutineStep) : [cleanRoutineStep({})]
  };
  renderSteps(selectedRoutine);
}

function addRoutineEditStep(position) {
  const nextSteps = collectRoutineEditorSteps();
  const insertAt = Math.max(0, Math.min(Number(position), nextSteps.length));
  const firstCategory = editableProductCategories()[0] || "Routine product";
  const firstProduct = productOptionsForCategory(firstCategory)[0] || "Custom product";
  nextSteps.splice(insertAt, 0, cleanRoutineStep({ action: "New step", product: firstProduct, category: firstCategory, application: "Apply as directed." }));
  rebuildRoutineEditor(nextSteps);
}

function deleteRoutineEditStep(index) {
  const nextSteps = collectRoutineEditorSteps();
  nextSteps.splice(index, 1);
  rebuildRoutineEditor(nextSteps);
}

function moveRoutineEditStep(index, direction) {
  const nextSteps = collectRoutineEditorSteps();
  const target = index + direction;
  if (target < 0 || target >= nextSteps.length) return;
  const [movedStep] = nextSteps.splice(index, 1);
  nextSteps.splice(target, 0, movedStep);
  rebuildRoutineEditor(nextSteps);
}

function resetRoutineEdits() {
  if (!selectedRoutine) return;
  const id = selectedRoutine.id;
  clearRoutineOverride(id);
  selectedRoutine = routineById(id, selectedDateKey || todayKey());
  routineEditMode = false;
  updateSheetRoutineHeader(selectedRoutine);
  renderWarnings(selectedRoutine);
  renderSteps(selectedRoutine);
  refresh();
}

function timerMarkup(routineId, index, routineStep) {
  const key = selectedDateKey || todayKey();
  const timer = getTimerState(routineId, index, key, routineStep.timerSeconds);
  const buttonText = timer.deadline ? "Restart timer" : `Start ${routineStep.timerLabel}`;
  return `
    <div class="step-tools">
      <button class="timer-button" type="button" data-timer="${index}" data-seconds="${routineStep.timerSeconds}" data-date="${key}">${buttonText}</button>
      ${timer.deadline ? `<button class="timer-button quiet" type="button" data-clear-timer="${index}" data-date="${key}">Clear timer</button>` : ""}
      <span class="timer-readout ${timer.complete ? "is-complete" : timer.active ? "is-active" : ""}" data-readout="${index}" data-routine="${routineId}" data-date="${key}" data-default="${routineStep.timerSeconds}" data-label="${routineStep.timerLabel}">${timer.label}</span>
      <span class="timer-note">${timer.deadline ? "Saved even if you leave the app" : "Timer persists after closing the app"}</span>
    </div>
  `;
}

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function timerStorageKey(routineId, index, key = todayKey()) {
  return `skinbuddy:timer:${key}:${routineId}:${index}`;
}

function getTimerDeadline(routineId, index, key = todayKey()) {
  const value = Number(localStorage.getItem(timerStorageKey(routineId, index, key)));
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getTimerState(routineId, index, key, defaultSeconds) {
  const deadline = getTimerDeadline(routineId, index, key);
  if (!deadline) {
    return {
      active: false,
      complete: false,
      deadline: 0,
      remaining: defaultSeconds,
      label: formatTime(defaultSeconds)
    };
  }
  const remaining = Math.ceil((deadline - Date.now()) / 1000);
  if (remaining <= 0) {
    return {
      active: false,
      complete: true,
      deadline,
      remaining: 0,
      label: "Ready"
    };
  }
  return {
    active: true,
    complete: false,
    deadline,
    remaining,
    label: formatTime(remaining)
  };
}

function startTimer(routine, index, seconds, key = todayKey()) {
  const deadline = Date.now() + seconds * 1000;
  localStorage.setItem(timerStorageKey(routine.id, index, key), String(deadline));
  localStorage.removeItem(timerNotifiedKey(routine.id, index, key));
  renderSteps(routine);
  updateVisibleTimers();
  ensureTimerInterval();
}

function clearTimer(routine, index, key = todayKey()) {
  localStorage.removeItem(timerStorageKey(routine.id, index, key));
  localStorage.removeItem(timerNotifiedKey(routine.id, index, key));
  renderSteps(routine);
  updateVisibleTimers();
}

function updateVisibleTimers() {
  document.querySelectorAll(".timer-readout").forEach((readout) => {
    const routineId = readout.dataset.routine;
    const index = Number(readout.dataset.readout);
    const key = readout.dataset.date || todayKey();
    const defaultSeconds = Number(readout.dataset.default || 0);
    const timer = getTimerState(routineId, index, key, defaultSeconds);
    readout.textContent = timer.label;
    readout.classList.toggle("is-active", timer.active);
    readout.classList.toggle("is-complete", timer.complete);
    const button = readout.parentElement?.querySelector("[data-timer]");
    if (button) button.textContent = timer.deadline ? "Restart timer" : `Start ${readout.dataset.label || formatTimerLabel(defaultSeconds)}`;
    maybeNotifyTimerComplete(routineId, index, key, timer);
  });
}

async function maybeNotifyTimerComplete(routineId, index, key, timer) {
  const settings = loadReminderSettings();
  const notifiedKey = timerNotifiedKey(routineId, index, key);
  if (!settings.timers || !timer.complete || localStorage.getItem(notifiedKey) === "1") return;
  localStorage.setItem(notifiedKey, "1");
  await showSkinBuddyNotification("Timer ready", {
    body: "Your wait step is finished.",
    tag: `skinbuddy-timer-${key}-${routineId}-${index}`,
    renotify: true,
    data: { routineId, index, key }
  });
}

function formatTimerLabel(totalSeconds) {
  if (totalSeconds >= 60 && totalSeconds % 60 === 0) return `${totalSeconds / 60} min`;
  return `${totalSeconds} sec`;
}

function ensureTimerInterval() {
  if (timerInterval) return;
  timerInterval = setInterval(updateVisibleTimers, 1000);
}

function resetRoutine(id, key = todayKey()) {
  const routine = routineById(id, key);
  routine.steps.forEach((_, index) => setDone(routine.id, index, false, key));
  if (els.routineSheet.classList.contains("is-open") && !selectedRoutine) renderDayRoutineCards(key);
  refresh();
}

function addTemplateToDay(dayKey, templateId) {
  const ids = scheduledTemplateIds(dayKey);
  if (!templateId || ids.includes(templateId)) return;
  setScheduledTemplateIds(dayKey, [...ids, templateId]);
  renderDayRoutineCards(selectedDateKey || todayKey());
  refresh();
}

function removeTemplateFromDay(dayKey, index) {
  const ids = scheduledTemplateIds(dayKey);
  if (ids.length <= 1) return;
  ids.splice(index, 1);
  setScheduledTemplateIds(dayKey, ids);
  renderDayRoutineCards(selectedDateKey || todayKey());
  refresh();
}

function moveTemplateInDay(dayKey, index, direction) {
  const ids = scheduledTemplateIds(dayKey);
  const target = index + direction;
  if (target < 0 || target >= ids.length) return;
  const [moved] = ids.splice(index, 1);
  ids.splice(target, 0, moved);
  setScheduledTemplateIds(dayKey, ids);
  renderDayRoutineCards(selectedDateKey || todayKey());
  refresh();
}

function refresh() {
  renderHero();
  renderToday();
  renderSchedule();
  renderHistory();
  renderProducts();
  renderReminderControls();
  updateStats();
}

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open]");
  const resetButton = event.target.closest("[data-reset]");
  const stepButton = event.target.closest("[data-step]");
  const timerButton = event.target.closest("[data-timer]");
  const clearTimerButton = event.target.closest("[data-clear-timer]");
  const categoryButton = event.target.closest("[data-category]");
  const deleteProductButton = event.target.closest("[data-delete-product]");
  const addEditStepButton = event.target.closest("[data-add-edit-step]");
  const deleteEditStepButton = event.target.closest("[data-delete-edit-step]");
  const moveEditStepButton = event.target.closest("[data-move-edit-step]");
  const cancelRoutineEditButton = event.target.closest("[data-cancel-routine-edit]");
  const openTemplateButton = event.target.closest("[data-open-template]");
  const dayAddTemplateButton = event.target.closest("[data-day-add-template]");
  const dayRemoveTemplateButton = event.target.closest("[data-remove-day-template]");
  const dayMoveTemplateButton = event.target.closest("[data-move-day-template]");
  const historyDayButton = event.target.closest("[data-history-date]");
  const tabButton = event.target.closest("[data-view]");

  if (openTemplateButton) openTemplate(openTemplateButton.dataset.openTemplate);
  if (dayAddTemplateButton) {
    const select = dayAddTemplateButton.parentElement?.querySelector("[data-day-template-select]");
    addTemplateToDay(dayAddTemplateButton.dataset.dayAddTemplate, select?.value || "");
  }
  if (dayRemoveTemplateButton) removeTemplateFromDay(dayRemoveTemplateButton.dataset.day, Number(dayRemoveTemplateButton.dataset.removeDayTemplate));
  if (dayMoveTemplateButton) moveTemplateInDay(dayMoveTemplateButton.dataset.day, Number(dayMoveTemplateButton.dataset.moveDayTemplate), Number(dayMoveTemplateButton.dataset.direction));
  if (addEditStepButton) addRoutineEditStep(els.stepList.querySelector("[data-add-step-position]")?.value || 0);
  if (deleteEditStepButton) deleteRoutineEditStep(Number(deleteEditStepButton.dataset.deleteEditStep));
  if (moveEditStepButton) moveRoutineEditStep(Number(moveEditStepButton.dataset.moveEditStep), Number(moveEditStepButton.dataset.direction));
  if (cancelRoutineEditButton) cancelRoutineEdit();
  if (historyDayButton) openDay(historyDayButton.dataset.historyDate);
  if (categoryButton) {
    selectedProductCategory = categoryButton.dataset.category;
    renderProducts();
  }
  if (deleteProductButton) {
    deleteCatalogProduct(deleteProductButton.dataset.deleteProduct);
    refresh();
  }
  if (openButton) openRoutine(openButton.dataset.open, openButton.dataset.date || todayKey());
  if (resetButton) resetRoutine(resetButton.dataset.reset, resetButton.dataset.date || todayKey());
  if (stepButton && selectedRoutine) {
    const index = Number(stepButton.dataset.step);
    const key = selectedDateKey || todayKey();
    setDone(selectedRoutine.id, index, !isDone(selectedRoutine.id, index, key), key);
    renderSteps(selectedRoutine);
    refresh();
  }
  if (timerButton && selectedRoutine) {
    startTimer(
      selectedRoutine,
      Number(timerButton.dataset.timer),
      Number(timerButton.dataset.seconds),
      timerButton.dataset.date || selectedDateKey || todayKey()
    );
  }
  if (clearTimerButton && selectedRoutine) {
    clearTimer(
      selectedRoutine,
      Number(clearTimerButton.dataset.clearTimer),
      clearTimerButton.dataset.date || selectedDateKey || todayKey()
    );
  }
  if (tabButton) {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab === tabButton));
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === `${tabButton.dataset.view}View`));
  }
});

els.editRoutine.addEventListener("click", () => {
  if (!selectedRoutine) return;
  if (routineEditMode) saveRoutineEdits();
  else {
    routineEditMode = true;
    renderSteps(selectedRoutine);
  }
});
els.resetRoutineEdits.addEventListener("click", resetRoutineEdits);
els.closeSheet.addEventListener("click", closeRoutine);
els.routineSheet.addEventListener("click", (event) => {
  if (event.target === els.routineSheet) closeRoutine();
});
els.productSearch.addEventListener("input", renderProducts);
els.historyPrev.addEventListener("click", () => {
  historyCursor = new Date(historyCursor.getFullYear(), historyCursor.getMonth() - 1, 1);
  renderHistory();
});
els.historyToday.addEventListener("click", () => {
  historyCursor = new Date();
  renderHistory();
});
els.historyNext.addEventListener("click", () => {
  historyCursor = new Date(historyCursor.getFullYear(), historyCursor.getMonth() + 1, 1);
  renderHistory();
});
els.addProduct.addEventListener("click", () => {
  addCatalogProduct(els.newProductName.value, els.newProductCategory.value);
  els.newProductName.value = "";
  refresh();
});
els.addTodayTemplate.addEventListener("click", () => {
  const templateId = els.todayTemplateSelect.value;
  const currentIds = getDayTemplateIds(activeSkincareDate());
  if (!templateId || currentIds.includes(templateId)) return;
  setTodayTemplateIds([...currentIds, templateId]);
  refresh();
});
els.newProductCategory.addEventListener("change", () => {
  selectedProductCategory = els.newProductCategory.value;
  renderProducts();
});
document.addEventListener("change", (event) => {
  if (event.target.matches('[data-edit-field="category"]')) {
    updateRoutineEditorProductSelect(event.target.closest(".routine-edit-step"));
  }
});
els.todayGymToggle.addEventListener("change", () => {
  const dayKey = getDayKey(activeSkincareDate());
  if (isWeekend(dayKey)) setGymDay(dayKey, els.todayGymToggle.checked);
  refresh();
});
els.notificationButton.addEventListener("click", async () => {
  const permission = await requestNotificationPermission();
  renderReminderControls();
  scheduleSmartReminders();
  if (permission === "granted") {
    await showSkinBuddyNotification("SkinBuddy reminders enabled", {
      body: "Your skincare reminders are ready.",
      tag: "skinbuddy-test",
      renotify: true
    });
  }
});
document.querySelectorAll("[data-reminder-toggle]").forEach((toggle) => {
  toggle.addEventListener("change", () => {
    updateReminderSetting(toggle.dataset.reminderToggle, { enabled: toggle.checked });
  });
});
document.querySelectorAll("[data-reminder-time]").forEach((time) => {
  time.addEventListener("change", () => {
    updateReminderSetting(time.dataset.reminderTime, { time: time.value });
  });
});
els.timerAlertToggle.addEventListener("change", () => {
  updateTimerAlertSetting(els.timerAlertToggle.checked);
});

window.addEventListener("focus", updateVisibleTimers);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    updateVisibleTimers();
    scheduleSmartReminders();
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  els.installButton.hidden = false;
});

els.installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  els.installButton.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

refresh();
ensureTimerInterval();
scheduleSmartReminders();
