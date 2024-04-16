<script>
function toggleTable() {
    var table = document.getElementById("ligaTable");
    var additionalText = document.getElementById("additionalText");

    if (table.style.display === "none") {
        table.style.display = "table";
        additionalText.style.display = "none";
    } else {
        table.style.display = "none";
        additionalText.style.display = "block";
    }
}
</script>