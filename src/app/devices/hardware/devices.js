// app/devices/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const DEVICE_PRICE_MAP = {
  1: { mrp: "3,000", reseller: "2,000" },
  2: { mrp: "12,000", reseller: "8,000" },
  3: { mrp: "25,000", reseller: "13,500" },
  4: { mrp: "32,000", reseller: "24,000" },
  5: { mrp: "40,000", reseller: "33,000" },
  6: { mrp: "45,000", reseller: "36,500" },
  7: { mrp: "52,000", reseller: "42,000" },
  8: { mrp: "75,000", reseller: "50,000" },
  9: { mrp: "55,000", reseller: "40,000" },
  10: { mrp: "100,000", reseller: "61,000" },
  11: { mrp: "65,000", reseller: "50,000" },
  12: { mrp: "42,000", reseller: "34,500" },
  13: { mrp: "50,000", reseller: "44,500" },
  14: { mrp: "12,000", reseller: "10,000" },
  15: { mrp: "26,000", reseller: "20,500" },
  16: { mrp: "16,000", reseller: "13,500" },
};

export const allDevices = [
  {
    id: 1,
    name: "Tipsoi TC-03 (Exit Reader)",
    img: "/tipsoi/Tipsoi TC-03 (Exit Reader).png",
    brand: "Tipsoi",
    type: "Exit Reader",
    details: [
      "Brand: Tipsoi",
      "Model: TC 03",
      "Device Type: Slave Device (Works with other existing Tipsoi Fastface and fingerprint devices)",
      "Country of Origin: Bangladesh",
      "Country of Assembly: Bangladesh",
      "Display: LED Indicator",
      "RFID Capacity: 6,000, 10,000, 20,000 up to 60,000 (On request)",
      "RFID Read Distance: 1-3 cm",
      "RFID Card Support: 125 KHZ RFID Cards, 13.56 MHZ MIFARE Cards",
      "Log Storage Capacity: 500,000",
      "Audio: Buzzer",
      "Access Control Support: Magnetic Door Lock || Turnstile Barrier",
      "Operating Temperature: 0°C - 45°C",
      "Weight: <65g",
      "Dimensions: 9.8cm * 5.8cm * 2.5cm (L * W * H)",
      "Warranty: 01 Year",
    ],
  },
  {
    id: 2,
    name: "Tipsoi RFID Card Reader",
    img: "/tipsoi/Tipsoi TC-10 (RFID Card Reader).png",
    brand: "Tipsoi",
    type: "RFID Card Reader",
    details: [
      "Brand: Tipsoi",
      "Model: TC 20",
      "Country of Origin: Bangladesh",
      "Display: 2.8\" LCD Color Display",
      "RFID Capacity: 6,000 - 60,000 (Max)",
      "RFID Read Distance: 1-3 cm",
      "RFID Card Support: 125 KHZ RFID Cards, 13.56 MHz MIFARE cards",
      "RFID Slave Device Support: Yes",
      "Log Storage Capacity: 500,000",
      "Communication: SIM Based (GSM 900/1800 MHz) || Always connected",
      "Attendance Log: Real-Time Sync with Cloud Server",
      "Battery Capacity: 2000 mAh Li-ion",
      "Battery Backup: 4 hours",
      "Power Supply: 9V-12V 2A",
      "Power Usage: 2W (standby) || 18W (peak)",
      "Audio: Buzzer",
      "Access Control Support: Magnetic Door Lock || Turnstile Barrier",
      "Operating Temperature: 0°C - 45°C",
      "Weight: 220g",
      "Dimensions: 13.5cm x 8.2cm x 3.5 cm (L x W x H)",
      "Warranty: 01 Year",
    ],
  },
  {
    id: 3,
    name: "Tipsoi TF-80",
    img: "/tipsoi/Tipsoi TF-80.png",
    brand: "Tipsoi",
    type: "Fingerprint Reader",
    details: [
      "Brand: Tipsoi",
      "Model: TF-80",
      "Authentication Method: Fingerprint, Card",
      "Country of Origin: Bangladesh",
      "Country of Assembly: Bangladesh",
      "Display: 2.8\" LCD Color Display",
      "Fingerprint Sensor: Optical Fingerprint Sensor",
      "Fingerprint Capacity: 3,000",
      "Fingerprint Recognition: FAR: 0.001% || FRR: 0.01%",
      "Fingerprint Recognition Time: 1:1 < 22ms || 1:N < 320ms (with 3000 FPs)",
      "RFID Capacity: 6,000, 10,000, 20,000, 60,000 (On request)",
      "RFID Read Distance: 1-3 cm",
      "RFID Card Support: 125 KHZ RFID Cards || HID, Mifare (On request)",
      "RFID Slave Device Support: Yes",
      "Log Storage Capacity: 500,000",
      "Communication: SIM Based (GSM 900/1800 MHz) || Always connected",
      "Attendance Log: Real-Time Sync with Cloud Server",
      "Battery Capacity: 2000 mAh Li-ion",
      "Battery Backup: 4 hours",
      "Power Supply: 9V-12V 2A",
      "Power Usage: 2W (standby) || 18W (peak)",
      "Audio: Buzzer",
      "Access Control Support: Magnetic Door Lock || Turnstile Barrier",
      "Operating Temperature: 0°C - 45°C",
      "Weight: < 500g",
      "Dimensions: 195 x 95 x 40 mm (L x W x D)",
      "Warranty: 01 Year",
      "API Functionalities: JSON data format (Lightweight rest API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between two platforms",
      "API Functionalities: Central/Single API for any number of devices and the devices or projects can be separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Fingerprint-template management through web panel",
      "Cloud Platform: MQTT broker ensures seamless data availability",
    ],
  },
  {
    id: 4,
    name: "Tipsoi Fastface 5 Lite",
    img: "/tipsoi/Tipsoi Fastface 5 Lite.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature: Stable performance and smooth lines",
      "Feature: Live face detection",
      "Feature: Recognition speed is less than 0.3s",
      "Feature: 99.99% recognition accuracy",
      "Brand: Fastface",
      "Model: D-505",
      "Authentication Method: Face, Card",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 186.00mm x 94.00mm x 23.00mm",
      "CPU: ARM Cortex A7 MP2@1GHz",
      "RAM: 512 MB",
      "ROM: 4 GB",
      "OS: Linux",
      "Display: 5-inch capacitive touchscreen",
      "Language: English",
      "Face Capacity: 10,000 (Max)",
      "Card Capacity: 10,000 (Max)",
      "Log Capacity: 2,00,000",
      "Camera: 2 (Infrared and RGB)",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.3 - 1.5m)",
      "FAR/FRR for Face Recognition: 0.001 / 1(%)",
      "Matching Speed: <= 0.3 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: Standard MIFARE Card, 13.56 MHz",
      "Interface: RS232, Wiegand 26/34, TTL, USB Type-A",
      "Communication: WiFi, LAN, TCP/IP",
      "PoE: Supported",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Protection Grade: IP54",
      "API Functionalities: JSON data format (Lightweight rest API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between two platforms",
      "API Functionalities: Central/Single API for any number of devices and the devices or projects can be separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Fingerprint-template management through web panel",
      "Cloud Platform: MQTT broker ensures seamless data availability",
    ],
  },
  {
    id: 5,
    name: "Tipsoi Fastface 5",
    img: "/tipsoi/Tipsoi Fastface 5.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature: Stable performance and smooth lines",
      "Feature: Live face detection",
      "Feature: Recognition speed is less than 0.3s",
      "Feature: 99.99% recognition accuracy",
      "Brand: Fastace",
      "Model: D-510",
      "Authentication Method: Face, Card",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 190.00mm x 87.50mm x 17.00mm",
      "CPU: Dual Core ARM Cortex-A7",
      "RAM: 512 MB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 5-inch IPS all-sight LCD Touchscreen",
      "Display Resolution: 1080*800",
      "Language: English",
      "Face Capacity: 50,000",
      "Card Capacity: 50,000",
      "Log Capacity: 2,00,000",
      "Camera: 2 (Infrared and RGB)",
      "Camera Resolution: 1932 (V) x 1092 (H)",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.3 - 1.5m)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <= 0.3 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: 125 Khz RFID card, Standard MIFARE Card, 13.56 MHz",
      "Interface: RS232, Wiegand 26/34, TTL, USB Type-A",
      "Communication: WiFi, LAN, TCP/IP",
      "PoE: Supported",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Protection grade: IP54",
      "API Functionalities: JSON data format (Lightweight rest API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between two platforms",
      "API Functionalities: Central/Single API for any number of devices and the devices or projects can be separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Fingerprint-template management through web panel",
      "Cloud Platform: MQTT broker ensures seamless data availability",
    ],
  },
  {
    id: 6,
    name: "Tipsoi Fastface 5 Pro",
    img: "/tipsoi/Tipsoi Fastface 5 Pro.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live face detection",
      "Feature and Performance: Anti-backlight",
      "Feature and Performance: Recognition speed is less than 0.2 s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi Fastface 5 Pro",
      "Model: D 530",
      "Authentication Method: Face, Card",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 174mm x 84mm x 18mm",
      "CPU: Dual-core ARM Cortex-A7",
      "RAM: 512 MB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 5-inch IPS all-sight LCD Touchscreen",
      "Display Resolution: 1080 * 800",
      "Language: English",
      "Face Capacity: 30,000",
      "Card Capacity: 30,000",
      "Log Capacity: 2,00,000",
      "Camera: 2 (Infrared and RGB)",
      "Camera Resolution: 1932 (V) x 1092 (H)",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.3 - 1.5m)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <=0.2 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: 125 Khz RFID card, Standard MIFARE Card, 13.56 MHz",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Protection grade: IP65",
      "API Functionalities: JSON data format (Lightweight REST API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between the two platforms",
      "API Functionalities: Central/Single API for any number of devices, with devices or projects separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy are ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Fingerprint-template management through web panel",
      "Cloud Platform: MQTT broker ensures seamless data availability",
    ],
  },
  {
    id: 7,
    name: "Tipsoi Fastface 5 Pro FP",
    img: "/tipsoi/Tipsoi Fastface 5 Pro FP.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Brand: Tipsoi Fastface 5 Pro FP",
      "Model: D 550",
      "Authentication Methods: Face, Card, Fingerprint",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 174mm x 84mm x 18mm",
      "CPU: Dual Core ARM Cortex-A7",
      "RAM: 512 MB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 5-inch IPS all-sight LCD Touchscreen",
      "Display Resolution: 1080 * 800",
      "Language: English",
      "Face Capacity: 10,000 || 30,000",
      "Card Capacity: 10,000 || 30,000",
      "Fingerprint Capacity: 3,000",
      "Log Capacity: 2,00,000",
      "Camera: 2 (Infrared and RGB)",
      "Camera Resolution: 1932 (V) * 1092 (H)",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.3 - 1.5m) (Configurable on device)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <= 0.2 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: 125 Khz RFID card, Standard MIFARE Card, 13.56 MHz",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Protection grade: IP65",
      "API Functionalities: JSON data format (Lightweight REST API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between the two platforms",
      "API Functionalities: Central/Single API for any number of devices, with devices or projects separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy are ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with an Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Fingerprint template management through the web panel",
      "Cloud Platform: MQTT broker ensures seamless data availability",
    ],
  },
  {
    id: 9,
    name: "Tipsoi Fastface 7 Lite",
    img: "/tipsoi/Tipsoi Fastface 7 Lite.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live face detection",
      "Feature and Performance: Anti-backlight",
      "Feature and Performance: Recognition speed is less than 0.3 s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi Fastface 7 Lite",
      "Model: D 705",
      "Authentication Method: Face, Card",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 239mm*126mm*26mm (L*W*H)",
      "CPU: Dual Core ARM Cortex-A7",
      "RAM: 512 MB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 7-inch IPS full-view LCD touch screen",
      "Display Resolution: 1024 * 600",
      "Language: English",
      "Face Capacity: 30,000",
      "Card Capacity: 1,00,000",
      "Log Capacity: 2,00,000",
      "Camera: Dual IR, RGB camera sensor",
      "Camera Resolution: 1920 (V) * 1080 (H)",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.5 - 2 m) (Configurable on device)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <=0.3 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: 125 Khz RFID card, Standard MIFARE Card, 13.56 MHz",
      "Interface: Relay, Wiegand input/output, RS232, RS485",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Certificates: CE, FCE",
      "Protection grade: IP65",
      "API Functionalities: JSON data format (Lightweight REST API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between the two platforms",
      "API Functionalities: Central/Single API for any number of devices, with devices or projects separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy are ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with an Excel file",
      "Cloud Platform: Device data cloning to another device",
    ],
  },
  {
    id: 10,
    name: "Tipsoi Fastface 8",
    img: "/tipsoi/Tipsoi Fastface 8.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live face detection",
      "Feature and Performance: Anti-backlight",
      "Feature and Performance: Recognition speed is less than 0.2 s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi Fastface 8",
      "Model: D 830",
      "Authentication Method: Face, Card, Fingerprint(Optional)",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 248mm x 128mm x 22 mm (L*W*H)",
      "CPU: Dual Core ARM Cortex-A7",
      "RAM: 1 GB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 8-inch IPS full-view LCD touch screen",
      "Display Resolution: 1080*800",
      "Language: English",
      "Face Capacity: 50,000 || 100,000 (Optional)",
      "Card Capacity: 50,000 || 100,000 (Optional)",
      "Fingerprint Capacity: 5,000 (not included in the regular offer, Optional on request)",
      "Log Capacity: 2,00,000",
      "Camera: IR, RGB dual-lens camera",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.3 - 1.5m) (Configurable on device)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <=0.2 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: 125 Khz RFID card, Standard MIFARE Card, 13.56 MHz",
      "Interface: Relay, Wiegand input/output, RS232, RS485",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -40C to +60C",
      "Working humidity: 10% to 90%",
      "Certificates: CE, FCE",
      "Protection grade: IP65",
      "API Functionalities: JSON data format (Lightweight REST API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between the two platforms",
      "API Functionalities: Central/Single API for any number of devices, with devices or projects separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy are ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with an Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Fingerprint template management through the web panel",
    ],
  },
  {
    id: 11,
    name: "Tipsoi Fastface 8 Lite",
    img: "/tipsoi/Tipsoi Fastface 8 Lite.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live face detection",
      "Feature and Performance: Anti-backlight",
      "Feature and Performance: Recognition speed is less than 0.3 s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi Fastface 8 Lite",
      "Model: D 805",
      "Authentication Method: Face, Card",
      "Country of Origin: Bangladesh",
      "Dimension (without support): 239mm x 126mm x 26 mm (L*W*H)",
      "CPU: Dual Core ARM Cortex-A7",
      "RAM: 1 GB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 8-inch IPS full-view LCD touch screen",
      "Display Resolution: 1280 * 800",
      "Language: English",
      "Face Capacity: 30,000",
      "Card Capacity: 1,00,000",
      "Log Capacity: 2,00,000",
      "Camera: IR, RGB dual-lens camera",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.5 -2m) (Configurable on device)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <=0.3 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: 125 Khz RFID card, Standard MIFARE Card, 13.56 MHz",
      "Interface: Relay, Wiegand input/output, RS232, RS485",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Certificates: CE, FCE",
      "Protection grade: IP65",
      "API Functionalities: JSON data format (Lightweight REST API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as Inovace Platform User ID to map between the two platforms",
      "API Functionalities: Central/Single API for any number of devices, with devices or projects separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy are ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with an Excel file",
      "Cloud Platform: Device data cloning to another device",
    ],
  },
  {
    id: 12,
    name: "Tipsoi Fastface Go Lite",
    img: "/tipsoi/Tipsoi Fastface Go Lite.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature and Performance: Portable, Industrial-grade design",
      "Feature and Performance: SIM-Based (4G/3G) Connectivity",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live face detection",
      "Feature and Performance: Recognition speed is less than 0.5s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Feature and Performance: Built-in Battery backup, with LVP",
      "Brand: Fastface",
      "Device Type: Portable",
      "Model: D-505P",
      "Authentication Method: Face, Card",
      "Dimension (facial recognition device): 186mm * 94mm * 23mm",
      "Dimension (including the enclosure): 270mm * 160mm * 70mm",
      "Mounting: Wall or handheld",
      "CPU: Dual Core ARM Cortex-A7, 1GHz",
      "RAM: 512 MB",
      "ROM: 4 GB",
      "OS: Linux",
      "Display: All-sight full view 5-inch capacitive touch screen display",
      "Display Resolution: 800 * 1080",
      "Language: English",
      "Face Capacity: 10,000 (Max)",
      "Card Capacity: 10,000 (Max)",
      "Log Capacity: 50,000 (MAX)",
      "Camera: 2 (Infrared and RGB)",
      "Camera Resolution: 1 Megapixel",
      "Infrared Light: Yes",
      "Face Detection Algorithm Certification: FDDB (ranked in the top 3)",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.3 - 1.5m) (Configurable from device)",
      "Recognition Accuracy and FAR/FRR for Face Recognition: 99.75% recognition rate at 1% false accept rate, and a minimum 99.25% recognition rate at 0.1% false accept rate",
      "Matching Speed: <= 0.5 sec, more than 30 face recognitions per minute",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: Standard MIFARE Card, 13.56 MHz",
      "Interface: Relay, RS232, Wiegand output, Door Sensor, Exit Button, USB",
      "Communication: WiFi, LAN, TCP/IP, SIM (4G/3G)",
      "Communication Protocol: HTTP (TLS encryption)",
      "Battery Backup: Backup of 2.5 - 3 hours, with the replaceable battery pack",
      "Low Voltage Protection: Present (cutoff voltage - 9.6V)",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Input System: Single DC 12V input",
      "ON/OFF Control: Single built-in ON/OFF switch to control the power",
      "Power Consumption: Max. 15W",
      "Firmware Update: USB, Web application (OTA), and local application (OTA)",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Certifications: ISO, FCC, CE",
      "API: Cloud API (with 3rd Party Software integration documentation)",
      "API Functionalities: JSON data format (Lightweight rest API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as the Platform's User ID map between two platforms",
      "API Functionalities: Central/Single API for any number of devices and the devices or projects can be separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "API Functionalities: Enrollment, Revoke, push/pull both API, database entry API",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Daily attendance, absence, transfer, joining, limiting access, etc. can be updated with both inbound and outbound data flaws (Optional, with Successful API integration)",
    ],
  },
  {
    id: 13,
    name: "Tipsoi Fastface Go",
    img: "/tipsoi/Tipsoi Fastface Go.png",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Feature and Performance: Portable, Industrial-grade design",
      "Feature and Performance: SIM-Based (4G/3G) Connectivity",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live face detection",
      "Feature and Performance: Recognition speed is less than 0.3s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Feature and Performance: Built-in Battery backup, with LVP",
      "Brand: Fastace",
      "Model: D 510P",
      "Dimension (without support): 270mm * 175mm * 75mm",
      "Mounting: Wall or Handheld",
      "CPU: Dual Core ARM Cortex-A7, 900 MHz AI Chip",
      "RAM: 512 MB",
      "ROM: 8 GB",
      "OS: Linux",
      "Display: 5-inch IPS all-sight LCD Touchscreen",
      "Display Resolution: 1080 * 800",
      "Language: English",
      "Authentication Methods: Face and Card",
      "Face Capacity: 50,000",
      "Card Capacity: 50,000",
      "Log Capacity: 2,00,000",
      "Camera: IR and RGB dual-lens camera",
      "Camera Resolution: 1932 (V) * 1092 (H)",
      "Infrared Light: Yes",
      "WDR: 120dB",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: 0.3 - 1.5m (configurable)",
      "Recognition Accuracy and FAR/FRR for Face Recognition: 99.75% recognition rate at 1% false accept rate, and a minimum 99.25% recognition rate at 0.1% false accept rate",
      "Matching Speed: <=0.3 sec, more than 50 face recognitions per minute",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: Standard MIFARE Card, 13.56 MHz",
      "Interface: Relay, RS232, Wiegand output, Door Sensor, Exit Button, USB",
      "Communication Protocol: HTTPS (TLS encryption)",
      "Connectivity: WiFi, LAN, TCP/IP, SIM (4G/3G)",
      "Firmware Upgrade: Firmware Update USB, Web application (OTA), and local application (OTA)",
      "Battery Backup: Backup of 2.5-3 hours, with replaceable battery pack",
      "Low Voltage Protection: Present (cutoff voltage - 9.6V)",
      "ON/OFF Control: ON/OFF Control A single built-in ON/OFF switch is used to control the power",
      "Certifications: ISO, FCC, CE",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key, Alarm Door: Yes",
      "Voice Output, Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +50C",
      "Working humidity: 10% to 90%",
      "Protection grade: IP54",
      "API: Cloud API (with 3rd Party Software integration documentation)",
      "API Functionalities: JSON data format (Lightweight rest API)",
      "API Functionalities: Push/Pull dual data transfer Mechanism",
      "API Functionalities: Customer platform Database ID can be used as the Platform's User ID map between two platforms",
      "API Functionalities: Central/Single API for any number of devices and the devices or projects can be separated by API tokens",
      "API Functionalities: Chunk-wise data transfer facility for optimized user-end data processing",
      "API Functionalities: Enrollment, Revoke, push/pull both API, database entry API",
      "Cloud Platform: Cloud-based web panel for device management",
      "Cloud Platform: Central database management from multiple locations",
      "Cloud Platform: Real-time Immediate Data",
      "Cloud Platform: High data security and privacy ensured by end-to-end encryption",
      "Cloud Platform: Easy one-time enrollment",
      "Cloud Platform: Bulk user profile creation with Excel file",
      "Cloud Platform: Device data cloning to another device",
      "Cloud Platform: Daily attendance, absence, transfer, joining, limiting access, etc. can be updated with both inbound and outbound data flaws (Optional, with Successful API integration)",
    ],
  },
  {
    id: 14,
    name: "Tipsoi Prompt P40",
    img: "/tipsoi/Tipsoi Prompt P40.png",
    brand: "Tipsoi",
    type: "Prompt",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live Fingerprint detection",
      "Feature and Performance: Recognition speed is less than 1s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi Prompt",
      "Model: P40",
      "Authentication Method: Fingerprint, Card",
      "Display: 2.4-inch TFT LCD",
      "Language: English, Multilingual supported",
      "Authentication Methods: Fingerprint, Card, Combination",
      "Fingerprint Capacity: 1,000/1500",
      "Card Capacity: 1,000/1500",
      "Log Capacity: 1,00,000",
      "Matching Speed: <=1.0 sec",
      "RFID Card: 125 KHz card",
      "Interface: Inside and outside Wiegand (26/34)",
      "Communication: USB Host/Ethernet/WIFI/RS485/U disk/P2P",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Tamper Input: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Working Voltage: DC9V~12V",
      "Temperature: -10C to +60C",
      "Working humidity: 20% to 80%",
    ],
  },
  {
    id: 15,
    name: "Tipsoi Prompt P310",
    img: "/tipsoi/Tipsoi Prompt P310.png",
    brand: "Tipsoi",
    type: "Prompt",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live Fingerprint detection",
      "Feature and Performance: Recognition speed is less than 0.5 s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi",
      "Model: Prompt P310",
      "Device Type: Face, Fingerprint, Card",
      "RAM: 512 MB",
      "ROM: 4 GB",
      "OS: Linux",
      "Display: 5-inch full-view IPS screen",
      "Display Resolution: 1280 * 720",
      "Language: English",
      "Face Capacity: 5,000",
      "Card Capacity: 5,000",
      "Fingerprint Capacity: 5,000",
      "Log Capacity: 5,00,000",
      "Camera: 2 Camera (Infrared and RGB)",
      "Camera Resolution: 5 Mega Pixel",
      "Infrared Light: Yes",
      "Shutter Type: Electronic Rolling Shutter",
      "Live Face Detection: Yes (0.5 - 2.5M)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <= 0.5 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: Standard Mango Card 125 Khz",
      "Interface: RS232, Wiegand 26/34, TTL, USB Type-A",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +60C",
      "Working humidity: 20% ~ 80%",
    ],
  },
  {
    id: 16,
    name: "Tipsoi Prompt P205",
    img: "/tipsoi/Tipsoi Prompt P205.png",
    brand: "Tipsoi",
    type: "Prompt",
    details: [
      "Feature and Performance: Industrial-grade design",
      "Feature and Performance: Stable performance and smooth lines",
      "Feature and Performance: Live Fingerprint detection",
      "Feature and Performance: Recognition speed is less than 0.5 s",
      "Feature and Performance: 99.99% recognition accuracy",
      "Brand: Tipsoi",
      "Model: Prompt P205",
      "Device Type: Face, Fingerprint, Card",
      "RAM: 128 MB",
      "ROM: 256 MB",
      "CPU: XM650V200SD2",
      "Display: 2.4 inch",
      "Display Resolution: 240 * 320",
      "Language: English",
      "Authentication Methods: Face and Card",
      "Face Capacity: 1500",
      "Card Capacity: 1500",
      "Fingerprint Capacity: 1500",
      "Log Capacity: 1,50,000",
      "Camera: 2 Camera (Infrared and RGB)",
      "Camera Resolution: RGB: 1 megapixel (1280*720), Infrared: 0.3M (640*480)",
      "Infrared Light: Yes",
      "Touch Keypad: Supported (14 Keys)",
      "Live Face Detection: Yes (0.5 - 1.3M)",
      "FAR/FRR for Face Recognition: 0.001/ 1(%)",
      "Matching Speed: <= 0.5 sec",
      "Intelligent Update: Yes",
      "Face Recognition Mode: 1:1, 1:N",
      "RFID Card: Standard Mango Card 125 Khz",
      "Interface: RS232, Wiegand 26/34, TTL, USB Type-A",
      "Communication: WiFi, LAN, TCP/IP",
      "Relay Output: Yes",
      "Door Sensor: Yes",
      "Exit Door input: Yes",
      "Alarm Key: Yes",
      "Alarm Door: Yes",
      "Voice Output: Yes",
      "Clock RTC: Yes",
      "Power: DC 12V/2A",
      "Power Consumption: Max. 15W",
      "Temperature: -10C to +60C",
      "Working humidity: 20% ~ 80%",
    ],
  },
];

export const getDeviceSlug = (deviceName = "") =>
  String(deviceName)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function DevicesPage() {
  const [brand, setBrand] = useState("All Brands");
  const [type, setType] = useState("All Types");
  const [failedImages, setFailedImages] = useState({});

  const markImageAsFailed = (deviceId) => {
    setFailedImages((prev) => ({ ...prev, [deviceId]: true }));
  };

  const filteredDevices = allDevices.filter((device) => {
    const brandMatch = brand === "All Brands" || device.brand === brand;
    const typeMatch = type === "All Types" || device.type === type;
    return brandMatch && typeMatch;
  });

  const getPriceLabel = (device) => {
    const mrp = device.details.find((item) => item.startsWith("MRP:"));
    const mrpValue = mrp?.split(":").slice(1).join(":").trim();
    const fallbackPrice = DEVICE_PRICE_MAP[device.id];
    const fallbackMrp = fallbackPrice?.mrp;
    const finalMrp = mrpValue || fallbackMrp;
    if (finalMrp) {
      return `Price ${finalMrp}`;
    }
    return "Price on request";
  };

  const getDetailValue = (device, labels) => {
    const normalized = labels.map((label) => label.toLowerCase());
    const found = device.details.find((item) => {
      const [labelPart] = item.split(":");
      return normalized.includes(labelPart?.trim().toLowerCase());
    });
    if (!found) return "";
    return found.split(":").slice(1).join(":").trim();
  };

  const getKeySpecs = (device) => {
    const model = getDetailValue(device, ["Model"]);
    const typeValue =
      getDetailValue(device, ["Authentication Method"]) ||
      getDetailValue(device, ["Device Type"]) ||
      getDetailValue(device, ["Type"]);
    const capacity =
      getDetailValue(device, ["Face Capacity"]) ||
      getDetailValue(device, ["Fingerprint Capacity"]) ||
      getDetailValue(device, ["Card Capacity"]) ||
      getDetailValue(device, ["RFID Capacity"]) ||
      getDetailValue(device, ["Log Capacity", "Log Storage Capacity"]);
    const reliability =
      getDetailValue(device, ["Matching Speed", "Recognition Speed"]) ||
      getDetailValue(device, ["Protection Grade", "Protection grade"]) ||
      getDetailValue(device, ["Warranty"]);

    return [
      model ? `Model: ${model}` : "",
      typeValue ? `Type: ${typeValue}` : "",
      capacity ? `Capacity: ${capacity}` : "",
      reliability ? `Performance: ${reliability}` : "",
    ].filter(Boolean);
  };

  const whatsappNumber = "8801982211000";

  const getOrderWhatsappUrl = (deviceName) => {
    const message = `Hello ERP17, I want to order this device: ${deviceName}`;
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-white py-16">
      <div className="  container">
        {/* Header with Left & Right */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">
              Our Devices
            </h2>
           
          </div>

          {/* Right Side - Filters */}
          <div className="flex gap-4">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="text-sm border border-gray-300 rounded-lg p-2"
            >
              <option>All Brands</option>
              <option>Tipsoi</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="text-sm border border-gray-300 rounded-lg p-2"
            >
              <option>All Types</option>
              <option>Exit Reader</option>
              <option>RFID Card Reader</option>
              <option>Fingerprint Reader</option>
              <option>Face</option>
              <option>Prompt</option>
            </select>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDevices.map((device) => {
            const imageUnavailable = !device.img || failedImages[device.id];
            const priceLabel = getPriceLabel(device);
            const keySpecs = getKeySpecs(device);

            return (
            <div
              key={device.id}
              className="border border-gray-300 rounded-xl shadow-sm transition flex flex-col overflow-hidden"
            >
            {/* Image */}
            <Link href={`/devices/${getDeviceSlug(device.name)}`} className="flex justify-center px-4 pt-5 mb-5">
              {imageUnavailable ? (
                <div className="rounded-lg w-full max-w-[250px] h-[200px] flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-semibold text-[var(--secondary)] text-center px-3">
                    {device.name}
                  </span>
                </div>
              ) : (
                <Image
                  src={device.img}
                  alt={device.name}
                  width={250}
                  height={200}
                  className="rounded-lg w-full max-w-[250px] max-h-[200px] object-contain"
                  onError={() => markImageAsFailed(device.id)}
                />
              )}
            </Link>



              {/* Title */}
              <h3 className="px-4 text-xl font-semibold text-[var(--secondary)] mb-4">
                <Link
                  href={`/devices/${getDeviceSlug(device.name)}`}
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  {device.name}
                </Link>
              </h3>

              <p className="px-4 text-lg font-semibold text-black mb-4">{priceLabel}</p>

              {keySpecs.length > 0 ? (
                <ul className="px-4 mb-4 space-y-1.5">
                  {keySpecs.slice(0, 3).map((spec, idx) => (
                    <li key={`${device.id}-spec-${idx}`} className="text-sm text-slate-700 leading-5">
                      {spec}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-auto px-4 pb-5 grid grid-cols-2 gap-3">
                <a
                  href={getOrderWhatsappUrl(device.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--primary)] bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
                >
                  Order
                </a>
                <Link
                  href={`/devices/${getDeviceSlug(device.name)}`}
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary-soft)]"
                >
                  Details
                </Link>
              </div>

            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
