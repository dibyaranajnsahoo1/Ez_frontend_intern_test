# React.js Single Page Application (Without Bootstrap)(Ez_frontend_intern_tes)

## Project Overview
This project is a single-page web application built with **React.js** (without Bootstrap). The application features a responsive form that integrates with the provided API and ensures proper validation before submission.

## Features
- **Responsive Design**: Works on multiple screen sizes (Mobile, Tablet, and Desktop views as per Adobe XD design).
- **Form Validation**:
  - Empty form submission is not allowed.
  - Email validation is implemented at the front-end.
  - If the email ends with `@ez.works`, an error message is displayed.
- **API Integration**:
  - Submits data via `POST` request.
  - Displays a success message on response code `200`.
  - Displays an error message on response code `422`.

---

## Tech Stack
- **React.js** (without Bootstrap)
- **CSS for Styling & Responsiveness**
- **Fetch API for Backend Communication**

---

## API Details
- **Base URL:** `https://test.ezworks.ai/api`
- **Request Type:** `POST`
- **Required Variable:** `email`
- **API Response:**
  - `200`: Form submitted successfully.
  - `422`: Error (If email ends with `@ez.works`).

---

