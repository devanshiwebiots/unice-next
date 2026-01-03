const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    NEXT_PUBLIC_API_PROD_URL: (() => {
      if (isDev) return "/api/";
      if (isProd) return "/api/";
      if (isStaging) return "/api/";
      return "/api/";
    })(),

    NEXT_PUBLIC_API_BASE_URL: "/api",

    NEXT_PUBLIC_NPROGRESS_SHOW_SPINNER: "false",
  };

  return { env };
};
