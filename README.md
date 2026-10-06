# 🌊 AquaChain: Decentralized Climate Data Interoperability

**AquaChain** (formerly AquaFHIR) is an AI-powered, decentralized interoperability bridge built for the **IEEE ClimateChain Global Hackathon**. It transforms unstructured citizen science observations of urban ecosystems into standardized, immutable **HL7 FHIR** records anchored to the blockchain.

By bridging the gap between environmental monitoring, artificial intelligence, and decentralized ledgers, AquaChain brings the **"One Health"** vision to life with perfect data transparency.

## 🚀 Features

* **Citizen Reporting Portal**: A mobile-friendly interface where citizens can report stream conditions using plain, natural language (e.g., "The water looks green and smells like sulfur").
* **AI NLP Engine**: Automatically analyzes the text, validates claims, and generates standard environmental data payloads (using LOINC code `92831-7` for Water quality assessment).
* **Blockchain Anchoring**: Cryptographically hashes (SHA-256) the AI-generated FHIR payload and anchors it to a decentralized ledger to ensure the data is immutable and tamper-proof.
* **Environmental Data Ledger**: A command center for policymakers to visualize real-time, verified environmental data, empowering rapid response and preventing data manipulation in carbon markets.

## 🛠️ Tech Stack

* **Frontend**: Next.js (React), Tailwind CSS, Lucide Icons
* **Backend**: Next.js API Routes (Node.js)
* **AI**: Fireworks AI (Llama 3 70B Instruct)
* **Web3**: Cryptographic Hashing (SHA-256), Simulated On-Chain Anchoring
* **Standards**: HL7 FHIR, LOINC

## 🏃‍♂️ Getting Started

First, install the dependencies:

```bash
npm install
```

Set up your environment variables by creating a `.env.local` file:
```env
FIREWORKS_API_KEY=your_api_key_here
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Hackathon Tracks Addressed

1. **Climate Data & Environmental Monitoring** - Providing a transparent, blockchain-anchored data system for environmental verification.
2. **AI & Machine Learning** - Using advanced LLMs to parse and structure subjective citizen data into rigorous scientific standards.

---
*Built with ❤️ for the IEEE ClimateChain Global Hackathon*
