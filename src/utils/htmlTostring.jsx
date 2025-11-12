export function htmlTostring(htmlText = "") {
  if (!htmlText) return "";

   return htmlText
     .replace(/<br\s*\/?>/gi, "\n")   // <br> , <br/> , <br></br> → newline
     .replace(/<\/?[^>]+(>|$)/g, "") // remove any remaining HTML tags
     .trim();
 }
