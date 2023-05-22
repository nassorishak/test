<script>
let entries = L;
function Entry(directoryld, description, duration) { this.directoryld = directoryld; this.description = description; this.duration = duration;
function addEntry() { 
    let entrylnput = document.getEIementById("entryInput").vaIue.trim();
if (entrylnput === ") {
     alert("lnvalid entry"); return;
let entryComponents = entrylnput.split(",");
if (entryComponents.Iength !== 3) { 
    alert("lnvalid entry"); return;
let directoryld = entryComponents[0].trim(); let description = entryComponents[1  let duration = entryComponents[2].trim();
entries.push(new Entry(directoryld, description, duration));
document.getEIementById("entryInput").vaI ue = l  displayEntries();
function displayEntries() { 
    let entryList = document.getEIementById("entryList"); entryList.innerHTML = 
entries.forEach(function(entry) {
     let entryltem = document.createEIement("Ii"); entryItem.textContent = entry.directoryld + I I + entry.description +  
+ entry.duration; entryList.appendChiId(entryItem);
function summary() {
     let summary = document.getEIementById("summary"); summary.innerHTML = 
let sortedEntries = entries.slice().sort(function(a, b) {
     return parseFIoat(a.duration) parseFIoat(b.duration);
let summaryText = "Total Entries: " + entries.length + "<br><br>";
sortedEntries.forEach(function(entry) {
     summaryText += entry.directoryld + I  + entry.description + I I + entry.duration +
summary.innerHTML = summaryText;
</script>