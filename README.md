### README.md (English version)

# YggTorrent Ratio Helper – Chrome Extension

A lightweight Chrome extension for **YggTorrent** that displays, next to your ratio stats, the **maximum amount** you can still download before your ratio drops below 1.0.

## Features

- Automatically analyzes the YggTorrent header panel:
  - Total Upload (in GB)
  - Total Download (in GB)
  - Current Ratio
- Calculates in real-time:
  - `Max DL = Upload - Download`
- Displays the result directly in the user panel, next to your stats:
  - `Max DL : X.XX GB`
- No external data transmission – everything runs client-side in your browser.

## How does it work?

YggTorrent already displays your stats in the header, for example:

- Upload: `19.15 GB`
- Download: `6.72 GB`
- Ratio: `2.851`

The extension reads these values from the page DOM and calculates:

```text
Max DL = Upload - Download
```

As long as you download less than this value, your ratio will stay above 1.0.

## Disclaimer

This extension is an **informal tool** developed by a user to help visualize their ratio.  
It is not affiliated with YggTorrent and offers no guarantee of permanent functionality.

Always use YggTorrent in compliance with their rules and applicable laws.

---

## License

This project is distributed under the MIT License.  
Feel free to modify, fork, and improve it.

```

```
