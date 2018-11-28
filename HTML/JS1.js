var ime=prompt("Unesi ime: ");
alert("vase ime je: "+ime);
document.write("vase ime je: "+ime);
if (ime>0)
	alert("Uneli ste pozitivan broj");
else
	alert("Uneli ste negativan broj");
for (var i=0; i<ime; i++) {
    document.write("<br><li><b>" + i)
}