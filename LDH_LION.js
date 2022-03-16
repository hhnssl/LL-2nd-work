var checkBtn = document.querySelectorAll(".check");

checkBtn.forEach(function (item) {
    item.addEventListener("click", toggle);
    item.active = false;
});

function toggle() {
    if (this.active) {
        this.classList.remove("active");
    } else {
        this.classList.add("active");
    }

    this.active = !this.active;
}
