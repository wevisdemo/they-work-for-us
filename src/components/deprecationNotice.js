import React from "react"

export const DeprecationNotice = () => (
  <div
    style={{
      backgroundColor: "black",
      color: "white",
      position: "sticky",
      top: "0px",
      textAlign: "center",
      padding: "10px",
      zIndex: "999",
    }}
  >
    เว็บไซต์นี้อัพเดตข้อมูลล่าสุดเมื่อ มีนาคม 2566 สามารถดูเวอร์ชันอัพเดตได้ที่{" "}
    <a
      className="underline"
      href="https://parliamentwatch.wevis.info/"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      https://parliamentwatch.wevis.info/
    </a>
  </div>
)
