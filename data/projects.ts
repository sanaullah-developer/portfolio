export type Project = {
  slug: string;
  title: string;
  problem: string;
  dataset: string;
  model: string;
  metrics: string[];
  githubUrl: string;
  demoUrl?: string; // add ? here
};

export const projects: Project[] = [
  {
    slug: "pk-license-plate-scanner",
    title: "PK License Plate Scanner",
    problem:
      "Built an end-to-end Pakistani vehicle license plate detection and OCR system to handle local plate formats not supported by any existing off-the-shelf solution, deployed for real-time CPU inference.",
    dataset:
      "Custom dataset of Pakistani vehicle images annotated on Roboflow, covering modern 2-letter, 3-letter, and old provincial plate formats across variable lighting and contrast conditions.",
    model:
      "Custom YOLOv8 trained for plate detection, paired with EasyOCR and a dual-preprocessing pipeline (colour + Otsu thresholding) for OCR accuracy. Regex-based validator filters noise and flags uncertain reads.",
    metrics: [
      "mAP@0.5: 97.7%",
      "Precision: 98.7%",
      "CPU inference — zero GPU cost on Hugging Face Spaces",
    ],
    githubUrl: "https://github.com/sanaullah-developer/pakistani-license-plate-scanner",
    demoUrl: "https://huggingface.co/spaces/sanaullahafd07",
  },
  {
    slug: "multilane-speed-estimation",
    title: "Multi-Lane Vehicle Speed Estimation & Violation Detection",
    problem:
      "Developed a real-time CV pipeline to track vehicles across multiple lanes from a single fixed camera and estimate true speed using perspective-correction geometry, replacing the need for radar-based measurement.",
    dataset:
      "Custom 6-class local-vehicle dataset annotated for YOLOv8 fine-tuning, supplemented by confusion-matrix analysis to diagnose and address class-specific detection gaps.",
    model:
      "YOLOv8 for detection combined with ByteTrack multi-object tracking. Homography-based perspective-correction pipeline converts pixel displacement into real-world speed (km/h). Point-in-polygon lane assignment with rolling-window smoothing for stable per-vehicle readings.",
    metrics: [
      "Real-time multi-lane tracking from single camera",
      "Automated violation logging with timestamped CSV and cropped snapshots",
      "Live Streamlit dashboard for per-lane analytics",
    ],
    githubUrl: "https://github.com/sanaullah-developer/multilane_speed_estimation_and_tracking",
    demoUrl: "public/output.mp4",
  },
  {
    slug: "cutout-ai-background-remover",
    title: "CutOut — AI Background Remover",
    problem:
      "Built a fast background removal web app using a custom-trained segmentation model, deployed as a fully Dockerised FastAPI application with one-click PNG download.",
    dataset:
      "~2,700 images across 27 training epochs, with targeted data augmentation for occlusion and lighting variance.",
    model:
      "Custom YOLOv8n-seg model. 4-step pipeline: YOLOv8 segmentation → binary mask → Gaussian edge smoothing → alpha-channel compositing for transparent PNG output. Served via FastAPI as a static HTML file.",
    metrics: [
      "Box mAP@0.5: 99.4%",
      "Mask mAP@0.5: 99.4%",
      "Mask mAP@0.5-95: 91.6%",
      "CPU inference: 2–4 seconds per image",
    ],
    githubUrl: "https://github.com/sanaullah-developer/background_remover",
    demoUrl: "https://huggingface.co/spaces/sanaullahafd07",
  },
  {
    slug: "ppe-compliance-detection",
    title: "PPE Compliance Detection System",
    problem:
      "Built a real-time workplace safety monitoring system to detect PPE compliance from live video streams, flagging non-compliant workers at the frame level.",
    dataset:
      "PPE dataset with targeted data augmentation to handle partial occlusion and variable lighting conditions across helmet, vest, and glove classes.",
    model:
      "Custom YOLOv8 trained for multi-class PPE detection. Video stream processing pipeline with frame-level non-compliance alerting.",
    metrics: [
      "mAP@0.5: 85%",
      "Detects helmets, vests, and gloves",
      "Real-time video stream processing",
    ],
    githubUrl: "https://github.com/sanaullah-developer/ppe_detection",
  },
  {
    slug: "weapon-detection-system",
    title: "Weapon Detection System",
    problem:
      "Developed a security-focused firearm detection system for real-time surveillance applications, handling variable lighting, angles, and partial occlusion.",
    dataset:
      "Custom 594-image dataset manually annotated for pistol detection across diverse environments and camera angles.",
    model:
      "Fine-tuned YOLOv8 with tuned confidence and NMS thresholds for real-time security camera feed performance.",
    metrics: [
      "mAP@0.5: 86.6%",
      "Precision: 88.7%",
      "Recall: 76.3%",
      "Latency: 4.2ms/frame on Tesla T4 GPU",
    ],
    githubUrl: "https://github.com/sanaullah-developer/pistol_detection",
  },
];
