Simple Answer for the following

Code Challenge:

Write a JavaScript function unhash(num) to find a ten letter string of characters that contains only letters from:

acdfgilmnoprstuw

such that the hash(the_string) is:

--> 292681030017238 <--

if hash is defined by the following pseudo-code:

Int64 hash(String s)
{
  Int64 hash = 7
  String letters = "acdfgilmnoprstuw"
  for(Int32 i = 0; i < s.length; i++)
  {
    hash = (hash * 23 + letters.indexOf(s[i]))
  }
  return hash
}

