# HTTP Credential Sniffing Lab

A hands-on cybersecurity lab demonstrating how insecure HTTP communication exposes sensitive user credentials over a network.

This project uses a vulnerable Node.js login application and Wireshark to capture HTTP packets and extract plaintext usernames and passwords from packet payloads, highlighting the importance of HTTPS encryption.

---

## 📌 Project Overview

When credentials are transmitted over HTTP instead of HTTPS, the data is sent in plaintext. Anyone capable of intercepting the traffic can view sensitive information directly from captured packets.

This lab demonstrates:

- Capturing HTTP traffic using Wireshark
- Filtering login requests
- Inspecting HTTP POST packets
- Reconstructing TCP streams
- Extracting plaintext credentials

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **HTML/CSS**
- **Wireshark**

---

## 🚀 Features

- Vulnerable HTTP login page
- Live packet capture using Wireshark
- HTTP POST request analysis
- TCP stream reconstruction
- Plaintext credential extraction
- Demonstration of insecure network communication

---

## 🧠 Skills Learned

- Network packet analysis
- HTTP protocol inspection
- Wireshark traffic filtering
- TCP stream analysis
- Credential sniffing concepts
- Understanding the importance of HTTPS/TLS

---

## 🔄 Project Workflow

```text
[ User Enters Credentials ]
              │
              ▼
[ HTTP POST Request Sent ]
              │
              ▼
[ Wireshark Captures Traffic ]
              │
              ▼
[ Apply Filters & Inspect Packets ]
              │
              ▼
[ Extract Plaintext Credentials ]
```

---

## 🔍 Wireshark Filters Used

| Filter | Purpose |
|--------|---------|
| `http` | Show all HTTP traffic |
| `http.request.method == "POST"` | Show login form submissions |
| `tcp.port == 8080` | Filter traffic for application port |

---


---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/http-credential-sniffing-lab.git
cd http-credential-sniffing-lab
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start the Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:8080
```

---

# 🧪 Lab Execution Steps

## Step 1 — Start Wireshark

- Open Wireshark
- Select the loopback adapter:
  - Windows: `Npcap Loopback Adapter`
  - Linux/macOS: `lo` or `lo0`

---

## Step 2 — Start Packet Capture

Begin capturing packets before opening the application.

---

## Step 3 — Use the Login Page

Open:

```text
http://localhost:8080
```

Enter:
- Username
- Password

Click **Login**.

---

## Step 4 — Filter HTTP POST Requests

Apply this filter in Wireshark:

```text
http.request.method == "POST"
```

---

## Step 5 — Inspect Captured Packets

- Right-click the POST request
- Select:

```text
Follow → TCP Stream
```

You will see credentials in plaintext.

Example:

```text
username=admin&password=123456
```

---

