let str1: string = "listen";
let str2: string = "silent";
let sorted1 = str1.split("").sort().join("");
let sorted2 = str2.split("").sort().join("");
if (sorted1 === sorted2) {
    console.log("The strings are anagrams");
} else {
    console.log("The strings are not anagrams");
}