const routines = {
  preGym: {
    id: "preGym",
    title: "Pre-Gym Morning",
    time: "11:00 AM / 12:00 PM",
    startsAt: 11,
    tone: "sunscreen",
    summary: "Cleanse lightly, then use sunscreen as the sweat-safe daytime moisturizer.",
    warnings: [
      "Avoid a separate cream under the Skin1004 sunscreen to reduce pore-clogging and eye-stinging during sweat.",
      "Save heavier cleansing for after the workout to protect the skin barrier."
    ],
    steps: [
      {
        action: "Cleanse",
        product: "Luxe Organix Whitening Repair Cleanser",
        application: "Massage onto damp skin with lukewarm water. Rinse cleanly and pat dry.",
        nuance: "Keep this cleanse light before the gym."
      },
      {
        action: "Protect",
        product: "Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+",
        application: "Apply a generous two-finger length amount to your face and neck.",
        nuance: "This works as an oil-free, sweat-safe daytime moisturizer."
      }
    ]
  },
  postGym: {
    id: "postGym",
    title: "Post-Gym Pre-Work",
    time: "5:00 PM",
    startsAt: 17,
    tone: "active",
    summary: "Double cleanse sunscreen and sweat, apply Vitamin C, then rebuild hydration for work.",
    warnings: [
      "The cleansing oil is mandatory because water-based cleansers cannot remove water-resistant sunscreen polymers.",
      "Luxe Organix 10% Niacinamide is banned from this slot because it can trigger flushing and burning with 20% pure Vitamin C.",
      "Wait 3 to 5 minutes after Revox B77 Just Vitamin C 20% before the next step."
    ],
    steps: [
      {
        action: "First cleanse",
        product: "Skin1004 Madagascar Centella Light Cleansing Oil",
        application: "Massage 1-2 pumps onto completely dry skin for 30 seconds. Emulsify with water, then rinse thoroughly.",
        nuance: "Skipping this oil step can trap gym sweat and sun filters."
      },
      {
        action: "Second cleanse",
        product: "COSRX Low pH Good Morning Gel Cleanser",
        application: "Work into a foam, cleanse away remaining oil residue, and pat skin completely dry."
      },
      {
        action: "The active",
        product: "Revox B77 Just Vitamin C 20%",
        application: "Smooth 3-4 drops over your bare, dry face.",
        nuance: "Pure L-Ascorbic Acid needs a low skin pH to absorb efficiently.",
        timerLabel: "5 min wait",
        timerSeconds: 300
      },
      {
        action: "Tone",
        product: "Skin1004 Madagascar Centella Toning Toner",
        application: "Pour a few drops into your palms and pat into the skin.",
        nuance: "Centella helps lower post-gym skin temperature and reduce heat-induced sebum."
      },
      {
        action: "Shield",
        product: "COSRX Advanced Snail 96 Mucin Essence",
        application: "Smooth 2 full pumps onto your face while it is still damp from the toner.",
        nuance: "Two pumps create an evaporation shield against air-conditioning dryness."
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
        nuance: "This gel-cream seals hydration while drying down soft-matte for your work shift."
      }
    ]
  }
};

const nightSchedule = {
  monday: {
    day: "Monday",
    title: "Sheet Mask + Deep Recovery Night",
    time: "2:00 AM",
    warnings: [
      "Do these steps immediately after logging off work.",
      "Skip cleansing oil at 2:00 AM because morning sunscreen was already removed at 5:00 PM."
    ],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Mask", "Your Favorite Sheet Mask", "Apply for 15 minutes. Remove and pat in excess fluid.", "Sheet mask hydration window.", 900),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump to damp skin."),
      step("Ampoule", "Skin1004 Centella Ampoule", "Apply 1 full dropper."),
      step("Peptides", "GHK-Cu Serum", "Apply 3-4 drops and press gently.", "Copper peptides thrive on active-free recovery nights."),
      step("Repair", "Dr. Drawing PDRN Ampoule", "Layer next over the copper peptides."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops across your face.", "Compatible with GHK-Cu and PDRN when isolated from the 5:00 PM Vitamin C slot."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to freeze hydration until morning.")
    ]
  },
  tuesday: {
    day: "Tuesday",
    title: "Recovery Night + Retinol Eye Care",
    time: "2:00 AM",
    warnings: ["Retinol eye cream is eye-area only while GHK-Cu stays on the rest of the face."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Ampoule", "Skin1004 Centella Ampoule", "Apply 1 full dropper."),
      step("Peptides", "GHK-Cu Serum", "Apply 3-4 drops."),
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
    warnings: [
      "GHK-Cu is banned tonight because BHA acids break down peptide bonds.",
      "Luxe Organix 10% Niacinamide is banned tonight because fresh BHA plus 10% niacinamide can trigger stinging and barrier distress."
    ],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat completely dry."),
      step("Exfoliate", "Oxecure Blackhead Clearing BHA/PHA Toner", "Apply to your dry face. Wait 1 full minute.", "Keep this on dry skin.", 60),
      step("Calm", "Skin1004 Centella Ampoule", "Apply 1 full dropper to soothe the pore lining after exfoliation."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  thursday: {
    day: "Thursday",
    title: "Deep Retinol Night",
    time: "2:00 AM",
    warnings: [
      "Use the sandwich method.",
      "GHK-Cu and 10% Niacinamide are banned tonight because this retinol night already stresses the barrier."
    ],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Hydrate", "Hada Labo Premium Hydrating Lotion", "Pat onto damp skin."),
      step("Buffer", "Skin1004 Madagascar Centella Soothing Cream", "Apply a thin layer across your face first.", "This oil-free gel-cream buffers retinol without a heavy finish."),
      step("Retinol", "Luxe Organix ClinicalPRO Retinol 0.2%", "Smooth a pea-sized amount over the dry cream layer."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a final layer to lock down the treatment.")
    ]
  },
  friday: {
    day: "Friday",
    title: "Recovery Night + Retinol Eye Care",
    time: "2:00 AM",
    warnings: ["Retinol eye cream stays around the eyes only."],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Ampoule", "Skin1004 Centella Ampoule", "Apply 1 full dropper."),
      step("Peptides", "GHK-Cu Serum", "Apply 3-4 drops."),
      step("Repair", "Dr. Drawing PDRN Ampoule", "Layer over peptides."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops across your face."),
      step("Eyes", "Luxe Organix Retinol + Bakuchiol Eye Cream", "Tap around the eyes only."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  saturday: {
    day: "Saturday",
    title: "Deep Radiance Glow Night",
    time: "2:00 AM",
    warnings: [
      "GHK-Cu is banned tonight so the EGF whitening ampoule can work uninterrupted."
    ],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat dry."),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Radiance", "Dr. Drawing EGF Whitening Ampoule", "Apply 1 dropper."),
      step("Calm", "Skin1004 Centella Ampoule", "Apply 1 full dropper."),
      step("Brighten", "Luxe Organix 10% Niacinamide Serum", "Pat 2-3 drops across your face."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to seal.")
    ]
  },
  sunday: {
    day: "Sunday",
    title: "Pore Detox Clay Mask Night",
    time: "2:00 AM",
    warnings: [
      "GHK-Cu and 10% Niacinamide are banned tonight because the barrier is vulnerable after a deep clay mask."
    ],
    steps: [
      step("Cleanse", "COSRX Low pH Good Morning Gel Cleanser", "Wash and pat completely dry."),
      step("Detox", "Skintific Mugwort Clay Mask", "Smooth a layer over oily zones. Wash off with warm water after 10 minutes. Pat dry.", "Avoid adding high-strength actives immediately after the clay mask.", 600),
      step("Tone", "Skin1004 Madagascar Centella Toning Toner", "Pat into skin."),
      step("Essence", "COSRX Advanced Snail 96 Mucin Essence", "Apply 1 pump."),
      step("Calm", "Skin1004 Centella Ampoule", "Apply to deeply calm skin."),
      step("Seal", "Neutrogena Hydro Boost 3D Sleeping Mask", "Apply a thin layer to restore deep water moisture.")
    ]
  }
};

const productCategories = {
  "Luxe Organix Whitening Repair Cleanser": "Cleanser",
  "Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+": "Sunscreen",
  "Skin1004 Madagascar Centella Light Cleansing Oil": "Oil cleanse",
  "COSRX Low pH Good Morning Gel Cleanser": "Cleanser",
  "Revox B77 Just Vitamin C 20%": "Active",
  "Skin1004 Madagascar Centella Toning Toner": "Toner",
  "COSRX Advanced Snail 96 Mucin Essence": "Essence",
  "Luxe Organix Bright Eyes Eye Cream": "Eye care",
  "Skin1004 Madagascar Centella Soothing Cream": "Moisturizer",
  "Your Favorite Sheet Mask": "Mask",
  "Skin1004 Centella Ampoule": "Calming ampoule",
  "GHK-Cu Serum": "Peptide",
  "Dr. Drawing PDRN Ampoule": "Repair ampoule",
  "Luxe Organix 10% Niacinamide Serum": "Active",
  "Neutrogena Hydro Boost 3D Sleeping Mask": "Sleeping mask",
  "Luxe Organix Retinol + Bakuchiol Eye Cream": "Eye retinol",
  "Oxecure Blackhead Clearing BHA/PHA Toner": "Exfoliant",
  "Hada Labo Premium Hydrating Lotion": "Hydrator",
  "Luxe Organix ClinicalPRO Retinol 0.2%": "Retinol",
  "Dr. Drawing EGF Whitening Ampoule": "Radiance ampoule",
  "Skintific Mugwort Clay Mask": "Clay mask"
};

const reminderDefinitions = {
  morning: {
    title: "Morning routine",
    defaultTime: "11:00",
    body: "Time to start your morning skincare."
  },
  postGym: {
    title: "Post-work routine",
    defaultTime: "17:00",
    body: "Cleanse, treat, and seal before your shift."
  },
  night: {
    title: "Night routine",
    defaultTime: "02:00",
    body: "Your 2 AM night routine is ready."
  }
};

let selectedRoutine = null;
let selectedDateKey = null;
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
  notificationStatus: document.querySelector("#notificationStatus"),
  notificationButton: document.querySelector("#notificationButton"),
  timerAlertToggle: document.querySelector("#timerAlertToggle"),
  timerAlertState: document.querySelector("#timerAlertState"),
  routineList: document.querySelector("#routineList"),
  weekGrid: document.querySelector("#weekGrid"),
  productList: document.querySelector("#productList"),
  productSearch: document.querySelector("#productSearch"),
  routineSheet: document.querySelector("#routineSheet"),
  sheetTitle: document.querySelector("#sheetTitle"),
  sheetTime: document.querySelector("#sheetTime"),
  sheetWarnings: document.querySelector("#sheetWarnings"),
  stepList: document.querySelector("#stepList"),
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

function dateKey(date) {
  return date.toLocaleDateString("en-CA");
}

function todayKey() {
  return dateKey(new Date());
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
  return localStorage.getItem(gymSettingKey(dayKey)) === "1";
}

function setGymDay(dayKey, enabled) {
  localStorage.setItem(gymSettingKey(dayKey), enabled ? "1" : "0");
}

function weekendMorningRoutine(dayKey) {
  const steps = routines.postGym.steps.map((routineStep, index) => {
    if (index !== routines.postGym.steps.length - 1) return routineStep;
    return {
      action: "Protect",
      product: "Skin1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+",
      application: "Apply a generous two-finger length amount to your face and neck as the final morning step.",
      nuance: "On no-gym weekends, sunscreen replaces the work-shift seal step because this routine is being used in the morning."
    };
  });
  return {
    ...routines.postGym,
    id: `weekendMorning-${dayKey}`,
    title: "Post-Gym / Pre-Work Morning",
    time: "Morning",
    startsAt: 11,
    summary: "Weekend no-gym plan: use the Post-Gym / Pre-Work flow, then finish with sunscreen.",
    warnings: [
      "Weekend gym is off, so this replaces the separate pre-gym routine for the day.",
      "Because this is a morning routine, sunscreen is the final step.",
      ...routines.postGym.warnings
    ],
    steps
  };
}

function getNightRoutine(date = new Date()) {
  return {
    id: `night-${getDayKey(date)}`,
    ...nightSchedule[getDayKey(date)]
  };
}

function getDayRoutines(date = new Date()) {
  const dayKey = getDayKey(date);
  if (isGymDay(date)) return [routines.preGym, routines.postGym, getNightRoutine(date)];
  return [weekendMorningRoutine(dayKey), getNightRoutine(date)];
}

function getTodayRoutines() {
  return getDayRoutines(new Date());
}

function getNextRoutine() {
  const hour = new Date().getHours();
  const list = getTodayRoutines();
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
  const routinesToday = getTodayRoutines();
  const completed = routinesToday.reduce((sum, routine) => sum + routineProgress(routine).done, 0);
  els.completedCount.textContent = completed;
  els.activeDayName.textContent = nightSchedule[getDayKey()].day.slice(0, 3);
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
  const next = getNextRoutine();
  const progress = routineProgress(next, todayKey());
  els.todayLabel.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric"
  });
  els.nextRoutineLabel.textContent = next.time;
  els.heroTitle.textContent = next.title;
  els.heroMeta.textContent = `${progress.done}/${progress.total} complete - ${next.summary}`;
  els.startNextRoutine.onclick = () => openRoutine(next.id, todayKey());
}

function renderToday() {
  const dayKey = getDayKey();
  const weekendToday = isWeekend(dayKey);
  els.todayGymControls.hidden = !weekendToday;
  if (weekendToday) {
    const enabled = isGymDay(new Date());
    els.todayGymToggle.checked = enabled;
    els.todayGymTitle.textContent = `${nightSchedule[dayKey].day} gym day`;
    els.todayGymHint.textContent = enabled ? "Today shows all 3 routines" : "Today skips the separate pre-gym routine";
  }
  els.todayCompleteBanner.hidden = !isDayComplete(todayKey());
  els.routineList.innerHTML = "";
  getTodayRoutines().forEach((routine) => {
    const progress = routineProgress(routine, todayKey());
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
        <button class="primary-action" type="button" data-open="${routine.id}" data-date="${todayKey()}">Open</button>
        <button class="secondary-action" type="button" data-reset="${routine.id}" data-date="${todayKey()}">Reset</button>
      </div>
    `;
    els.routineList.append(card);
  });
}

function renderSchedule() {
  els.weekGrid.innerHTML = "";
  const currentDate = todayKey();
  getCurrentWeekDates().forEach((date) => {
    const key = getDayKey(date);
    const item = nightSchedule[key];
    const routinesForDate = getDayRoutines(date);
    const scheduleDateKey = dateKey(date);
    const progress = routinesForDate.reduce((sum, routine) => sum + routineProgress(routine, scheduleDateKey).done, 0);
    const total = routinesForDate.reduce((sum, routine) => sum + routine.steps.length, 0);
    const banned = item.warnings.filter((warning) => warning.toLowerCase().includes("banned")).length;
    const card = document.createElement("article");
    card.className = `day-card${scheduleDateKey === currentDate ? " is-current" : ""}`;
    card.innerHTML = `
      <div class="day-top">
        <div>
          <p class="eyebrow">${item.day} - ${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
          <h3>${item.title}</h3>
          <p class="day-meta">${routinesForDate.length} routines - ${progress}/${total} steps logged</p>
        </div>
        <span class="badge ${banned ? "caution" : ""}">${isGymDay(date) ? "gym day" : "no gym"}</span>
      </div>
      <div class="mini-list">
        ${routinesForDate.map((routine) => `<span>${routine.title}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openDay(scheduleDateKey));
    els.weekGrid.append(card);
  });
}

function productLibrary() {
  const notes = new Map();
  const collect = (routine) => {
    routine.steps.forEach((routineStep) => {
      if (!notes.has(routineStep.product)) notes.set(routineStep.product, new Set());
      notes.get(routineStep.product).add(routine.title || routine.day);
    });
  };
  Object.values(routines).forEach(collect);
  Object.values(nightSchedule).forEach((item) => collect({ title: item.day, steps: item.steps }));
  return [...notes.entries()].map(([name, appearances]) => ({
    name,
    category: productCategories[name] || "Routine product",
    appearances: [...appearances]
  }));
}

function renderProducts() {
  const query = els.productSearch.value.trim().toLowerCase();
  els.productList.innerHTML = "";
  productLibrary()
    .filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(query))
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
    .forEach((item) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-top">
          <div>
            <p class="eyebrow">${item.category}</p>
            <h3>${item.name}</h3>
            <p class="product-meta">${item.appearances.join(", ")}</p>
          </div>
        </div>
      `;
      els.productList.append(card);
    });
}

function routineById(id, key = todayKey()) {
  const match = getDayRoutines(dateFromKey(key)).find((routine) => routine.id === id);
  return match || getNextRoutine();
}

function openDay(key) {
  const date = dateFromKey(key);
  const dayKey = getDayKey(date);
  selectedRoutine = null;
  selectedDateKey = key;
  els.sheetTitle.textContent = `${nightSchedule[dayKey].day} Routines`;
  els.sheetTime.textContent = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  renderWarnings({
    warnings: isGymDay(date)
      ? ["Gym day is on, so this day includes Pre-Gym, Post-Gym / Pre-Work, and Night Routine."]
      : ["Gym day is off, so this day includes the Post-Gym / Pre-Work morning routine and Night Routine."]
  });
  renderDayRoutineCards(key);
  els.routineSheet.classList.add("is-open");
  els.routineSheet.setAttribute("aria-hidden", "false");
}

function renderDayRoutineCards(key) {
  const date = dateFromKey(key);
  els.stepList.innerHTML = "";
  if (isDayComplete(key)) {
    const banner = document.createElement("div");
    banner.className = "complete-banner";
    banner.innerHTML = "<strong>Day complete</strong><span>All routines for this day are logged.</span>";
    els.stepList.append(banner);
  }
  getDayRoutines(date).forEach((routine) => {
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

function openRoutine(id, key = todayKey()) {
  selectedRoutine = routineById(id, key);
  selectedDateKey = key;
  els.sheetTitle.textContent = selectedRoutine.title;
  els.sheetTime.textContent = `${selectedRoutine.time} - ${dateFromKey(key).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  renderWarnings(selectedRoutine);
  renderSteps(selectedRoutine);
  els.routineSheet.classList.add("is-open");
  els.routineSheet.setAttribute("aria-hidden", "false");
}

function closeRoutine() {
  els.routineSheet.classList.remove("is-open");
  els.routineSheet.setAttribute("aria-hidden", "true");
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
  routine.steps.forEach((routineStep, index) => {
    const done = isDone(routine.id, index, selectedDateKey || todayKey());
    const row = document.createElement("article");
    row.className = `step-row${done ? " is-done" : ""}`;
    row.innerHTML = `
      <button class="step-check" type="button" aria-label="Toggle ${routineStep.action}" data-step="${index}">${done ? "OK" : ""}</button>
      <div class="step-body">
        <div class="step-title">
          <strong>${index + 1}. ${routineStep.action}</strong>
          <span class="badge">${productCategories[routineStep.product] || "Step"}</span>
        </div>
        <p class="step-text"><strong>${routineStep.product}</strong><br>${routineStep.application}</p>
        ${routineStep.nuance ? `<p class="step-note">${routineStep.nuance}</p>` : ""}
        ${routineStep.timerSeconds ? timerMarkup(routine.id, index, routineStep) : ""}
      </div>
    `;
    els.stepList.append(row);
  });
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

function refresh() {
  renderHero();
  renderToday();
  renderSchedule();
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
  const tabButton = event.target.closest("[data-view]");

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

els.closeSheet.addEventListener("click", closeRoutine);
els.routineSheet.addEventListener("click", (event) => {
  if (event.target === els.routineSheet) closeRoutine();
});
els.productSearch.addEventListener("input", renderProducts);
els.todayGymToggle.addEventListener("change", () => {
  const dayKey = getDayKey();
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
