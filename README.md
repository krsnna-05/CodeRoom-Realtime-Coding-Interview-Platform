# CodeRoom — Realtime Coding Interview Platform

CodeRoom is a realtime collaborative coding environment designed for technical interviews and pair programming. Multiple users can join a shared room and edit code simultaneously with live synchronization.

The system uses WebSockets for realtime communication and Monaco Editor (the engine behind VS Code) to provide a rich in-browser coding experience.

---

## Tech Stack

Frontend

- React + TypeScript (Vite)
- TailwindCSS
- Monaco Editor

Backend

- Node.js
- Express
- WebSockets (`ws`)

---

## Core Features

- Create and join coding rooms
- Realtime collaborative code editing
- Live code synchronization between participants
- VSCode-like editor with syntax highlighting
- Room-based session architecture

---

## UI Layout Requirements

Generate only the **UI structure and layout components**.

Do NOT implement any application logic, networking, or state synchronization.

### Layout Structure

The application should follow this layout:

```
+-------------------------------------------------------+
| CodeRoom | Room ID | Participants | Language Selector |
+-------------------------------------------------------+

+-------------------------------+-----------------------+
|                               |                       |
|           CODE EDITOR         |        CHAT           |
|                               |                       |
|                               |                       |
|                               |                       |
+-------------------------------+-----------------------+

+-------------------------------------------------------+
| Run Code | Copy Room Link | Leave Room                |
+-------------------------------------------------------+
```

---

## UI Components to Generate

1. **Header**
   - App title: CodeRoom
   - Room ID display
   - Participants count
   - Language selector dropdown

2. **Editor Container**
   - Large area for Monaco editor
   - Should occupy ~70–75% of width

3. **Chat Panel**
   - Right side panel
   - Chat messages list
   - Input field
   - Send button

4. **Footer Controls**
   - Run Code button
   - Copy Room Link button
   - Leave Room button

---

## Styling

Use:

- TailwindCSS
- Dark developer-themed UI
- Responsive flex/grid layout
- Clean modern appearance similar to VS Code or CoderPad

---

## Important Constraint

Only generate **UI components and layout**.

Do NOT include:

- WebSocket logic
- backend calls
- room management
- editor synchronization
- business logic

All application logic will be implemented separately.

---

## Goal

Produce a clean React UI scaffold that will later be connected to a realtime collaboration backend.
