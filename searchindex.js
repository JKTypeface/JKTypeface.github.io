// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "JK Typeface", "FONTS  MEDIA  MORE INFO  jjkbrasfoot@gmail.com  NEW RELEASED'S  All Rights Reseverds JK Typeface 2017-2019   ", "");
   return this;
}
