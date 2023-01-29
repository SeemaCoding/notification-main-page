"use strict";
console.log(true);

const postNotification = document.querySelector(".post-notification");
const unReadMessages = document.querySelectorAll(".unread");
const unread = document.querySelector(".number");
const markAll = document.querySelector(".mark_all");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
  });
});

markAll.addEventListener("click", () => {
  unReadMessages.forEach((message) => {
    message.classList.remove("unread");
  });

  const newUnreadMessages = document.querySelectorAll(".unread");
  console.log(newUnreadMessages);
  unread.innerText = newUnreadMessages.length;
});
