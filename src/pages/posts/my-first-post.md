---
layout: "../../layouts/Layout.astro"
title: "My First Post"
date: "2024-07-31"
---

# My First Post

This is the content of my first post. Welcome to my blog!
```javascript
function setInitialTheme() {
  const storedTheme = localStorage.getItem("theme");
  const isDarkMode = storedTheme === "dark";
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  toggleIcons(isDarkMode);
}
```
