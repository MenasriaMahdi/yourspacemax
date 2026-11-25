/**
 * Official Site Data & Content Model for YOUR SPACE MAX
 * Supports bilingual content (Arabic 'ar' and French 'fr')
 */
const ar = require('./translations/ar');
const fr = require('./translations/fr');

function getSiteData(lang = 'ar') {
  return lang === 'fr' ? fr : ar;
}

// Default export uses Arabic for backward compatibility, with getSiteData helper
const defaultData = { ...ar };
defaultData.getSiteData = getSiteData;
defaultData.ar = ar;
defaultData.fr = fr;

module.exports = defaultData;
