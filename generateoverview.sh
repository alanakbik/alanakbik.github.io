#!/bin/bash

ROOT=$1
OUTPUT="site-index.html" 

i=0
echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">" 
echo "<UL>" 
for filepath in `find "$ROOT" -type d| sort`; do
  path=`basename "$filepath"`
  echo "  <LI>$path</LI>" 
  echo "  <UL>" 
  for i in `find "$filepath" -maxdepth 1 -mindepth 1 -type f| sort`; do
    file=`basename "$i"`
    echo "    <LI><a href=\"$file\">$file</a></LI>" 
  done
  echo "  </UL>" 
done
echo "</UL>" 
