export type BuildShot = {
  title: string
  caption: string
  image?: string
  /** Intrinsic pixel size of `image`, so the browser can reserve space before it loads. */
  width?: number
  height?: number
}

export const dollyPocket = {
  name: 'Dolly Pocket',
  tagline:
    'A fully offline AI assistant with Dolly Parton’s voice, built into a vintage Polly Pocket',
  status: 'In progress — targeted for October 2026',
  overview:
    'Dolly Pocket is a self-contained AI assistant that runs entirely on-device. A React Native app talks to a local Ollama model, so there are no API keys and nothing leaves the hardware. The assistant answers in Dolly Parton’s speaking style, wrapped in a UI themed to match. The whole thing is a cyberdeck packed into a vintage Polly Pocket compact — a Raspberry Pi 5, a small HDMI touchscreen, stereo speakers, and NVMe storage inside the clamshell.',
  specs: [
    { label: 'Compute', value: 'Raspberry Pi 5, 8GB RAM' },
    { label: 'Storage', value: '512GB NVMe SSD on a Pimoroni NVMe Base' },
    { label: 'Display', value: 'Waveshare 3.2" HDMI LCD, 480×800' },
    { label: 'Audio', value: 'Dual 3W 8Ω speakers' },
    { label: 'Software', value: 'React Native app + Ollama for local inference' },
    { label: 'Enclosure', value: 'Modified vintage Polly Pocket compact' },
  ],
  shots: [
    {
      title: 'The donor shell',
      caption:
        'A vintage Polly Pocket compact, gutted and test-fit with the Pi 5, screen, and speakers seated in the lid.',
      image: 'dolly-pocket/donor-shell.webp',
      width: 768,
      height: 1024,
    },
    {
      title: 'Parts pile',
      caption:
        'Pi 5 (8GB), Waveshare 3.2" HDMI LCD, Silicon Power 512GB NVMe, Pimoroni NVMe Base, CQRobot speakers, and the soldering station.',
      image: 'dolly-pocket/parts-pile.webp',
      width: 1024,
      height: 768,
    },
    {
      title: 'Storage',
      caption:
        'Silicon Power P34A60 512GB (PCIe Gen 3 ×4) paired with the Pimoroni NVMe Base for Raspberry Pi 5.',
      image: 'dolly-pocket/storage.webp',
      width: 360,
      height: 480,
    },
    {
      title: 'Test fit',
      caption:
        'Screen and speakers mounted in the lid; the lower tray still needs to be cut for controls and power.',
      image: 'dolly-pocket/test-fit.webp',
      width: 768,
      height: 1024,
    },
    {
      title: 'Measuring the shell',
      caption:
        'The donor compact opened up and measured out before any cutting, to see how much depth there was to work with.',
      image: 'dolly-pocket/shell-measuring.webp',
      width: 1600,
      height: 1200,
    },
    {
      title: 'The Pi 5',
      caption:
        'Raspberry Pi 5 (8GB) with its active cooler fan and heatsink attached — the brains of the build.',
      image: 'dolly-pocket/pi5-heatsink.webp',
      width: 1200,
      height: 1600,
    },
    {
      title: 'NVMe base',
      caption:
        'The Pimoroni NVMe Base for Raspberry Pi 5, which carries the 512GB SSD and stacks onto the Pi.',
      image: 'dolly-pocket/nvme-base.webp',
      width: 1200,
      height: 1600,
    },
    {
      title: 'The screen',
      caption:
        'The Waveshare 3.2" HDMI LCD, measured against the shell to plan out the cutout in the lid.',
      image: 'dolly-pocket/waveshare-screen.webp',
      width: 1600,
      height: 1200,
    },
    {
      title: 'Screen connector edge',
      caption:
        'A closer look at the HDMI and USB-C connectors on the edge of the screen board, checking clearance inside the shell.',
      image: 'dolly-pocket/screen-connector-edge.webp',
      width: 1200,
      height: 1600,
    },
  ] as BuildShot[],
}
