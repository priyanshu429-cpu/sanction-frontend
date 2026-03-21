// ==============================
// API Base URL
// ==============================

// Since frontend + backend are SAME domain (FastAPI serving UI)
const BASE_URL = "";

// ==============================
// Predict Sanction Impact
// ==============================

export async function analyzeSanction(policy: any) {
  try {
    const response = await fetch(`${BASE_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(policy),
    });

    if (!response.ok) {
      throw new Error("Prediction request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in analyzeSanction:", error);
    throw error;
  }
}

// ==============================
// Explain Specific Metric Dip
// ==============================

export async function explainMetric(payload: {
  metric: string;
  value: number;
  context: any;
}) {
  try {
    const response = await fetch(`${BASE_URL}/explain`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Explanation request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in explainMetric:", error);
    throw error;
  }
}

// ==============================
// Macro Risk API
// ==============================

export async function getMacroRisk(countryCode: string) {
  try {
    const response = await fetch(`${BASE_URL}/macro-risk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country_code: countryCode }),
    });

    if (!response.ok) {
      throw new Error("Macro risk request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in getMacroRisk:", error);
    throw error;
  }
}

// ==============================
// Macro Timeseries API
// ==============================

export async function getMacroTimeseries(countryCode: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/macro-timeseries?country_code=${countryCode}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch macro data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getMacroTimeseries:", error);
    throw error;
  }
}