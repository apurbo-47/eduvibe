// "use client";

// import { useRef, useState, useEffect } from "react";

// export default function OTPWithSuccess() {
//   const [step, setStep] = useState<"form" | "otp" | "success">("form");
//   const [timer, setTimer] = useState(30);

//   const [form, setForm] = useState({
//     phone: "",
//     password: "",
//   });

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

//   useEffect(() => {
//     if (step === "otp" && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [step, timer]);

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStep("otp");
//     setTimer(30);
//   };

//   const handleOtpChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number,
//   ) => {
//     const value = e.target.value.replace(/\D/, "");
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   const handleOtpSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const otpValue = otp.join("");
//     console.log("OTP:", otpValue);

//     // fake verify
//     if (otpValue.length === 6) {
//       setTimeout(() => {
//         setStep("success");
//       }, 500);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 text-center">
//       <h1 className="md:text-4xl text-2xl font-bold mb-5">OTP Verification</h1>
//       {step === "form" && (
//         <form onSubmit={handleSubmit} className="space-y-4 text-left">
//           <div>
//             <label className="text-sm font-medium">Phone</label>
//             <input
//               name="phone"
//               type="tel"
//               value={form.phone}
//               onChange={handleFormChange}
//               className="w-full mt-1 border rounded-lg px-4 py-3"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Password</label>
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleFormChange}
//               className="w-full mt-1 border rounded-lg px-4 py-3"
//               required
//             />
//           </div>

//           <button className="w-full bg-[#7A60FF] text-white py-3 rounded-lg cursor-pointer">
//             Submit
//           </button>
//         </form>
//       )}

//       {step === "otp" && (
//         <form onSubmit={handleOtpSubmit} className="space-y-6">
//           <h3 className="font-medium">Enter OTP</h3>

//           <div className="flex gap-2 justify-between">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputsRef.current[index] = el)}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleOtpChange(e, index)}
//                 className="w-12 h-12 text-center border rounded-lg text-lg"
//                 required
//               />
//             ))}
//           </div>

//           <button className="w-full bg-[#7A60FF] text-white py-3 rounded-lg cursor-pointer">
//             Verify OTP
//           </button>

//           <p className="text-sm text-gray-500">Resend in {timer}s</p>
//         </form>
//       )}

//       {/* SUCCESS */}
//       {step === "success" && (
//         <div className="space-y-6">
//           {/* animated check */}
//           <div className="flex justify-center">
//             <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
//               <svg
//                 className="w-10 h-10 text-green-600"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-green-600">
//             Verification Successful 🎉
//           </h2>

//           <p className="text-gray-500">
//             Your account has been verified successfully.
//           </p>

//           <button
//             onClick={() => setStep("form")}
//             className="bg-[#7A60FF] text-white px-6 py-3 rounded-lg cursor-pointer"
//           >
//             Go Back
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
