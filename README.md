# 🧠 Student Task Tracker – DevOps Project

A full-stack task tracking web app with alerting, built in Node.js + EJS and deployed on **Google Cloud Run** via **Cloud Build Triggers**.

Live Demo: 👉 [student-task-tracker](https://student-task-tracker-463924798938.us-central1.run.app/)

---

## 🚀 Features

- 📝 Create, update, complete tasks
- ⏰ Add deadlines for reminders
- ⚠️ Email + phone alerts for overdue tasks
- 🔴 Red badge alert UI for overdue items
- 📦 Dockerized and cloud-native
- 🔁 CI/CD enabled (push to GitHub → auto-deploy)

---

## 🛠️ Tech Stack

| Layer         | Tech                     |
|---------------|--------------------------|
| Backend       | Node.js + Express        |
| Frontend      | EJS + HTML/CSS           |
| Alerts        | Nodemailer + Phone Log   |
| Deployment    | Docker + Cloud Run       |
| CI/CD         | Cloud Build Trigger (GCP)|
| Version Ctrl  | Git + GitHub             |

---

## 📂 Project Structure

task-1/
├── app.js
├── Dockerfile
├── public/
├── routes/
├── views/
├── .github/workflows/
├── package.json

yaml
Copy
Edit
