/*
  #1: element-img
  #2: contribute after
  #3: href path
  #4: character _
  #5: size
  #6: character .
  #7 extension
  #8: character ?
  #9: params
  #10: contribute before
 */
export const IMAGE_REGEX =
  /(<img ([^>]* )?src=["']([^"'_]*\/)([^"'_.]*)(_?)([^"'.]*)(\.?)([^"'?]*)(\??)([^"']*)["']([^>]*)?>)/gi;
export const URL_IMAGE_REGEX =
  /(http[s]?:)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif|webp|psd|raw)/i;
export const URL_VIDEO_REGEX =
  /(http[s]?:)([/|.\w\s-])*\.(?:mp4|m4p|m4v|3gp|avi|webm|mov)/i;
export const URL_FILE_REGEX =
  /(http[s]?:)([/|.\w\s-])*\.(?:pdf|doc|docx|xsl|xslx|txt|zip|rar)/i;
export const HTML_TAG_REGEX_NOT_VALID = /[^a-zA-Z0-9]/gi;
export const URL_REGEX = /^(https|http)/i;

export const REGEX_POST_DETAIL = /^\/post\/([a-zA-Z0-9-]*)$/i;
export const REGEX_LIVESTREAM_DETAIL = /^\/livestream\/([a-zA-Z0-9-]*)$/i;
export const URL_REGEX_PARSE = /^(http[s]?:\/\/)?([^#?/]*)([^#?]*)(.*)$/i;
export const REGEX_PROFILE_FACEBOOK =
  /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-.]*)?/i;
export const REGEX_URL_ABSOLUTE = /^(\.\.|\.|\/)/gi;

export const REGEX_HASH_TAG = /[$,:;=?|'<>.^*()%!-"[\]\\/}{~`]/g;

export const NUMBER_REGEX = /^\d+\.\d+$/;
