/*
 *  BMI and BMR calculator using metric values
 *  Version 0.2
 *
 *  written by A.Hermann
 *  this software is OpenSourc and is published unter the GPL
  
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

    Alexandra Hermann – Beratung, Software, Design 
    Copyright (C) 2013 - 2021 Alexandra Hermann
    Alexandra Hermann – Beratung, Software, Design comes with ABSOLUTELY NO 
    WARRANTY; for details type `show w'. This is free software, and you are 
    welcome to redistribute it under certain conditions; type `show c' for details.

Alexandra Hermann – Beratung, Software, Design, hereby disclaims all copyright 
interest in the program (which makes passes at compilers) written by 
Heinrich Alexandra Hermann.

 */

// File to printout the calculator form
// Version 0.2.1

/**
 * Function to printout the calculator form.
 * @param hostdoctype String type of hosting document. May be in this version "phpBB" or nothing.
 */
function PrintCalcForm(hostdoctype)
{
	var headline_class = "";
	var fieldname_class = "";
	var content_class = "";
	
	switch (hostdoctype)
	{
		case "phpBB":
			headline_class = "row1";
			fieldname_class = "row2";
			content_class = "row3";
			break;
			
		default:
		
			break;
	}
	
	document.write("<form name=\"calculator\">");
	document.write("<table border=\"0\" cellspacing=\"1\" cellpadding=\"2\" name=\"bmr_bmi_calc\">");
	document.write("<tr><td colspan=\"3\" class=\"" + headline_class + "\">BMR / BMI - Rechner V0.2</td></tr>");
	document.write("<tr>");
	document.write("<td class=\"" + fieldname_class + "\">Geschlecht:</td>");
	document.write("<td class=\"" + content_class + "\"><input type=\"radio\" name=\"sex\" value=\"f\" checked> weiblich</td>");
	document.write("<td class=\"" + content_class + "\"><input type=\"radio\" name=\"sex\" value=\"m\"> m&auml;nnlich</td>");
	document.write("</tr>");
	document.write("<tr>");
	document.write("<td class=\"" + fieldname_class + "\">Gewicht:</td>");
	document.write("<td colspan=\"2\" class=\"" + content_class + "\"><input type=\"text\" name=\"weight\" maxlength=\"6\" size=\"10\"> kg </td>");
	document.write("</tr>");
	document.write("<tr>");
	document.write("<td class=\"" + fieldname_class + "\">Gr&ouml;&szlig;e:</td>");
	document.write("<td colspan=\"2\" class=\"" + content_class + "\">");
	document.write("<input type=\"text\" name=\"height\" size=\"10\" maxlength=\"5\"> m </td>");
	document.write("</tr>");
	document.write("<tr>");
	document.write("<td class=\"" + fieldname_class + "\">Alter:</td>");
	document.write("<td colspan=\"2\" class=\"" + content_class + "\"><input type=\"text\" name=\"age\" size=\"10\" maxlength=\"3\"> Jahre </td>");
	document.write("</tr>");
	document.write("<tr align=\"right\">");
	document.write("<td colspan=\"3\" class=\"" + headline_class + "\"><input type=\"reset\" name=\"reset\" value=\"Felder l&ouml;schen\"> <input type=\"button\" name=\"calcit\" value=\"berechnen\" onclick=\"CalcIt();\"></td>");
	document.write("</tr>");
	document.write("<tr>");
	document.write("<td class=\"" + fieldname_class + "\">Ergebnis:</td>");
	document.write("<td class=\"" + content_class + "\">BMR: <input type=\"text\" readonly name=\"bmr\" size=\"12\" value=\"0,000\"> kcal / 24 h</td>");
	document.write("<td class=\"" + content_class + "\">BMI: <input type=\"text\" readonly name=\"bmi\" value=\"0,000\" size=\"10\"> kg / m&sup2;</td>");
	document.write("</tr>");
	document.write("<tr align=\"center\"><td colspan=\"3\" class=\"" + content_class + "\">");
	if (navigator.language.indexOf("en") > -1) {
		document.write("<p lang=\"en\">Written by A.Hermann - this software is OpenSource ");
		document.write("and is published by the GPL.</p>");
	} else if (navigator.language.indexOf("de") > -1) {
		document.write("<p lang=\"de\">Geschrieben von A.Hermann - Diese Software ist OpenSource ");
		document.write("und unterliegt der GPL.</p>");
	}
	document.write("</td></tr>");
	document.write("</table>");
	document.write("</form>");
}
