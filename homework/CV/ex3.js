const now = new Date();
const hour = now.getHours();

if (hour >= 5 && hour < 12) {
    document.write("Good Morning");
}
else if (hour >= 12 && hour < 18) {
    document.write("Good Afternoon");
} else {
    document.write("Good Evening");
}
