# 🧱 Bill Grinder UI Kit

A reusable component library built with **React**, **TypeScript**, and **Tailwind CSS** for the [Bill Grinder](https://github.com/) platform. This UI kit provides modular, themeable components to accelerate development of internal dashboards, agent tools, reporting systems, and automation workflows.


**Install Peer Dependencies
**
Make sure your app includes the following:
Tailwind CSS (^3.x)
React (^18.x)
chart.js (^4.x) for charts
classnames or use the included cn() util

**Folder Structure
**
src/
├── components/
│   ├── ui/          # Atomic components (Button, Input, Modal, etc.)
│   ├── layout/      # App shell components (Sidebar, Topbar)
│   ├── composite/   # Advanced or app-specific UI (AgentCard, InvoiceRow)
├── lib/             # Utilities (e.g., cn() for class merging)
├── styles/          # Global Tailwind config

**Available Components
**
UI Primitives
Button – with variant and size props
Input, Select, Checkbox, Textarea
Tabs – interactive tab navigation
Modal – base dialog box
Toast – timed popup message
Table – styled data tables
Badge, Tooltip, Avatar
Layout
Sidebar – vertical navigation
Topbar – (planned) header nav with account dropdown
PageWrapper – layout utility
Data Visualization
Chart – Line chart using Chart.js

**Themes**
Tailwind tokens are pre-configured in tailwind.config.js:
primary: #1E40AF
secondary: #E0E7FF
destructive: #DC2626



---

## 🚀 Getting Started

1. Clone the Repo
```bash
git clone https://github.com/YOUR_ORG/bill-grinder-ui-kit.git
cd bill-grinder-ui-kit
npm install

