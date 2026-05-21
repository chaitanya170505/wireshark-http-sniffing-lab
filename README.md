Here is a clean, professional, and well-structured GitHub `README.md` file tailored for your project. It includes clear installation steps, standard repository styling, and places your key learnings front and center.

---

```markdown
# HTTP Credential Sniffing Lab

A hands-on cybersecurity lab demonstrating how insecure, unencrypted HTTP communication exposes sensitive user credentials over a local network. 

Using a custom Node.js/Express web application and Wireshark, this project captures network traffic, filters for HTTP POST requests, and extracts plaintext usernames and passwords from packet payloads to illustrate the critical necessity of HTTPS encryption.

---

## 🛠️ Technologies Used

*   **Backend:** Node.js, Express.js
*   **Frontend:** HTML5, CSS3 (Simple Login Form)
*   **Network Analysis:** Wireshark

---

## 🚀 Features

*   **Vulnerable Login Endpoint:** A simple, intentional HTTP-based form that transmits data without transport-layer security.
*   **Packet Capture & Inspection:** Practical walkthrough for capturing live local loopback traffic.
*   **Targeted Traffic Filtering:** Demonstrates the use of specific Wireshark display filters to isolate authentication data.
*   **TCP Stream Reassembly:** Reconstructs full login sessions to view exact payloads as a malicious actor would see them.

---

## 🧠 Skills Learned & Verified

*   **Network Analysis:** Navigating Wireshark's interface, understanding packet structures, and monitoring live traffic.
*   **Protocol Inspection:** Analyzing the differences between the application layer (HTTP) and transport layer (TCP).
*   **Filter Optimization:** Utilizing conditional Wireshark filters to eliminate background network noise.
*   **Security Literacy:** Understanding the mechanics of credential sniffing attacks and the fundamental math behind unencrypted network risk.

---

## 🔄 Project Workflow

```text
[ Browser (User Inputs Credentials) ] 
                 │
                 ▼
[ Unencrypted HTTP POST Request over Port 8080 ]
                 │
                 ▼
[ Wireshark Packet Capture (Promiscuous/Loopback Mode) ]
                 │
                 ▼
[ Filter & Inspect Payload ] ──► [ Extract Plaintext Username & Password ]

```

---

## 🔍 Wireshark Filters Used

To isolate the relevant authentication traffic from background network noise, the following filters were utilized:

| Filter | Purpose |
| --- | --- |
| `http` | Isolates all Hypertext Transfer Protocol traffic. |
| `http.request.method == "POST"` | Filters specifically for data submissions (like login forms). |
| `tcp.port == 8080` | Limits capture visibility to the custom Node.js application port. |

---

## 💻 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher recommended)
* [Wireshark](https://www.wireshark.org/)

### Installation & Setup

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/http-credential-sniffing-lab.git](https://github.com/your-username/http-credential-sniffing-lab.git)
cd http-credential-sniffing-lab


```



```

2. **Install dependencies:**
   ```bash
   npm install

```

3. **Start the vulnerable server:**
```bash
node server.js


```



```
   *The server should now be running on `http://localhost:8080`.*

### Lab Execution Steps

1. Launch **Wireshark** and select your loopback interface (e.g., `Npcap Loopback Adapter` on Windows or `lo0` on macOS/Linux).
2. Start the packet capture.
3. Open your browser, navigate to `http://localhost:8080`, type a test username and password, and click **Login**.
4. Stop the Wireshark capture and apply the filter: `http.request.method == "POST"`.
5. Right-click the captured POST packet, select **Follow** -> **TCP Stream**, and locate the plaintext credentials in the request body.

---

## 💡 Key Takeaway

> **Crucial Lesson:** Because standard HTTP traffic transmits data in the clear, any entity positioned along the network path (or sharing an unencrypted local network) can trivially read sensitive information. This lab underscores why modern web applications must strictly enforce **HTTPS (SSL/TLS)** to encrypt data in transit, ensuring confidentiality and data integrity.

---

## ⚠️ Disclaimer

This project is created strictly for educational and authorized testing purposes. Running packet sniffers on networks without explicit permission from the network owner is illegal and unethical.

```

```

```
