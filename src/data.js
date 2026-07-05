export const doctors = [
  {
    id: "dr-rahul-sharma",
    name: "Dr. Rahul Sharma",
    qualification: "MBBS, MD (General Medicine)",
    specialization: "General Physician & Diabetologist",
    experience: "12+ Years Experience",
    regNo: "MCI-48592",
    languages: ["English", "Hindi", "Punjabi"],
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    awards: ["Best Physician Award 2024", "Excellence in Diabetology 2022"],
    memberships: ["Association of Physicians of India (API)", "Indian Medical Association (IMA)"],
    timings: "Mon - Fri, 9:00 AM - 5:00 PM",
    rating: 4.9,
    reviews: 142
  },
  {
    id: "dr-ananya-sen",
    name: "Dr. Ananya Sen",
    qualification: "MBBS, DCH (Pediatrics)",
    specialization: "Pediatrician & Neonatologist",
    experience: "10+ Years Experience",
    regNo: "MCI-52104",
    languages: ["English", "Bengali", "Hindi"],
    photo: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400",
    awards: ["Child Healthcare Champion 2023"],
    memberships: ["Indian Academy of Pediatrics (IAP)", "National Neonatology Forum"],
    timings: "Mon - Sat, 10:00 AM - 4:00 PM",
    rating: 4.8,
    reviews: 189
  },
  {
    id: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    qualification: "MBBS, MS (Orthopedics)",
    specialization: "Orthopedic Surgeon & Joint Replacement Specialist",
    experience: "15+ Years Experience",
    regNo: "MCI-33928",
    languages: ["English", "Gujarati", "Hindi"],
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    awards: ["Joint Replacement Surgeon of the Year 2023"],
    memberships: ["Indian Orthopedic Association (IOA)", "AAOS Member"],
    timings: "Mon - Fri, 11:00 AM - 6:00 PM",
    rating: 4.9,
    reviews: 215
  },
  {
    id: "dr-priya-patel",
    name: "Dr. Priya Patel",
    qualification: "MBBS, MD, DNB (Dermatology)",
    specialization: "Dermatologist & Cosmetologist",
    experience: "8+ Years Experience",
    regNo: "MCI-60481",
    languages: ["English", "Hindi", "Marathi"],
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    awards: ["Young Dermatologist Excellence Award 2022"],
    memberships: ["IADVL (Indian Association of Dermatologists)"],
    timings: "Tue - Sat, 10:00 AM - 5:00 PM",
    rating: 4.7,
    reviews: 98
  },
  {
    id: "dr-vikram-aditya",
    name: "Dr. Vikram Aditya",
    qualification: "MBBS, MD, DM (Cardiology)",
    specialization: "Interventional Cardiologist",
    experience: "18+ Years Experience",
    regNo: "MCI-28491",
    languages: ["English", "Telugu", "Hindi"],
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    awards: ["Lifetime Cardiology Excellence Award 2025"],
    memberships: ["Cardiological Society of India (CSI)", "American College of Cardiology (ACC)"],
    timings: "Mon - Thu, 9:00 AM - 3:00 PM",
    rating: 5.0,
    reviews: 320
  }
];

export const services = [
  {
    id: "general-medicine",
    title: "General Medicine",
    shortDesc: "Comprehensive primary care, diagnosis, and non-surgical treatment of adult diseases.",
    intro: "Our General Medicine department is the first point of contact for patients seeking healthcare solutions. We focus on diagnosing complex health issues, chronic illness management, and preventative screening.",
    symptoms: ["Chronic body aches", "Unexplained fatigue", "Fever and common cold", "Digestive issues", "Persistent headaches"],
    causes: ["Infections (viral, bacterial)", "Lifestyle disorders (stress, lack of sleep)", "Environmental allergen exposure", "Nutritional deficiencies"],
    diagnosis: ["Detailed clinical examination", "Comprehensive blood profile", "Imaging (X-ray, Ultrasound)", "ECG and baseline screenings"],
    treatments: ["Prescription medication plans", "Lifestyle modifications", "Preventative vaccinations", "Chronic condition tracking (hypertension, thyroid)"],
    benefits: ["Early detection of underlying health issues", "Holistic management of multi-system diseases", "Continuous, coordinated, and personalized care"],
    faqs: [
      { q: "How often should I see a General Physician?", a: "Healthy adults should have a check-up once a year, while patients with chronic illnesses like high blood pressure or diabetes should visit every 3 to 6 months." },
      { q: "What should I bring to my first appointment?", a: "Bring a list of current medications, prior medical records, and any recent lab reports." }
    ]
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    shortDesc: "Specialized medical care for infants, children, and adolescents, including immunizations.",
    intro: "The Pediatrics department is dedicated to providing friendly, gentle, and expert medical care for children from birth up to 18 years. We offer comprehensive child health monitoring, developmental assessments, and vaccinations.",
    symptoms: ["Delayed developmental milestones", "Frequent low immunity or colds", "Sudden behavioral changes", "Loss of appetite", "Pediatric skin rashes"],
    causes: ["Developmental factors", "Common childhood viral pathogens", "Dietary patterns and nutrition", "Genetic and congenital factors"],
    diagnosis: ["Developmental milestones tracking", "Immunological evaluation", "Growth chart comparisons", "Allergy profiling"],
    treatments: ["Immunization scheduling", "Nutritional guidance and supplement planning", "Acute pediatric infection care", "Asthma and allergy management"],
    benefits: ["Ensures age-appropriate physical and mental growth", "Proactive immunity shielding via vaccination", "Child-friendly treatment environment"],
    faqs: [
      { q: "What is the standard vaccination schedule?", a: "Vaccinations start from birth and have key touchpoints at 1.5, 2.5, 3.5 months, 9 months, 1.5 years, and 5 years. We provide customized vaccination charts during visits." },
      { q: "When should I consult a pediatrician about a child's fever?", a: "Consult immediately if the child is under 3 months with a temperature above 100.4°F, or if a child of any age has a fever lasting over 3 days accompanied by lethargy." }
    ]
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    shortDesc: "Expert treatment for bone, joint, ligament, tendon, muscle, and spine disorders.",
    intro: "Our Orthopedics department specializes in restoring your mobility. From treating acute fractures and sports injuries to managing advanced osteoarthritis, we offer both non-surgical therapies and advanced joint replacements.",
    symptoms: ["Severe joint pain", "Swelling or stiffness", "Limited range of motion", "Numbness in limbs", "Deformity following physical impact"],
    causes: ["Sports and athletic accidents", "Age-related bone mineral erosion (Osteoporosis)", "Repetitive strain or poor posture", "Autoimmune inflammatory conditions (Arthritis)"],
    diagnosis: ["High-resolution X-Rays", "MRI/CT scan referrals", "Bone mineral density (DEXA) tests", "Rheumatology blood profiles"],
    treatments: ["Joint replacement surgeries (Knee/Hip)", "Physiotherapy & rehabilitation coordination", "Intra-articular injections", "Casting, splinting, and bracing"],
    benefits: ["Restores pain-free skeletal movement", "Prevents long-term muscle degradation", "Improves overall posture and lifestyle"],
    faqs: [
      { q: "What are the common signs that I need joint replacement?", a: "Severe joint pain that interferes with sleep, inability to perform daily activities (like walking or climbing stairs), and lack of relief from medications or physical therapy." },
      { q: "Do all fractures require surgery?", a: "No. Most fractures heal perfectly with plaster casts or splints. Surgery is typically reserved for displaced, unstable, or open fractures." }
    ]
  },
  {
    id: "cardiology",
    title: "Cardiology",
    shortDesc: "Advanced heart care, including ECGs, echocardiography, and hypertension control.",
    intro: "Our Cardiology department offers full cardiovascular screening, risk assessment, and therapeutic options. We specialize in managing coronary artery disease, heart failure, arrhythmias, and hypertension.",
    symptoms: ["Chest tightness or pressure", "Shortness of breath on exertion", "Irregular heartbeats (palpitations)", "Dizziness or fainting spells", "Swelling in the ankles and legs"],
    causes: ["Plaque build-up in arteries (Atherosclerosis)", "High blood pressure (Hypertension)", "Genetics and smoking", "Poor diet, stress, and sedentary lifestyle"],
    diagnosis: ["Electrocardiogram (ECG)", "Echocardiogram (ECHO)", "Treadmill Test (TMT) / Stress Test", "24-Hour Holter Monitoring"],
    treatments: ["Blood pressure regulation therapies", "Cholesterol and lipid control management", "Post-angioplasty and bypass follow-up care", "Blood thinners and heart muscle support medication"],
    benefits: ["Reduces risks of acute myocardial infarction (heart attack)", "Enhances endurance and physical capacity", "Improves longevity and cardiovascular efficiency"],
    faqs: [
      { q: "What is normal blood pressure?", a: "Normal blood pressure is typically around 120/80 mmHg. High blood pressure is diagnosed if values consistently exceed 130/80 mmHg." },
      { q: "What is the difference between a heart attack and cardiac arrest?", a: "A heart attack is a circulation problem where blood flow to the heart is blocked; a cardiac arrest is an electrical problem where the heart suddenly stops beating." }
    ]
  },
  {
    id: "dermatology",
    title: "Dermatology",
    shortDesc: "Complete skin, hair, and nail treatments, cosmetic procedures, and allergy relief.",
    intro: "Dermatology department offers therapeutic and aesthetic solutions for all skin types. We address clinical disorders like eczema, psoriasis, acne, hair loss, and offer non-invasive cosmetic touch-ups.",
    symptoms: ["Persistent acne and scarring", "Itchy, flaky red patches", "Severe hair thinning or bald spots", "Changes in mole shape or color", "Nail infections and brittleness"],
    causes: ["Hormonal imbalances", "Fungal, bacterial, or viral skin infections", "Allergen triggers or environmental toxins", "Autoimmune dysfunction"],
    diagnosis: ["Skin scraping & culture examinations", "Dermoscopy", "Biopsy for suspicious lesions", "Patch tests for allergies"],
    treatments: ["Topical and oral dermatological therapies", "Chemical peels and microdermabrasion", "Laser treatments for pigmentation & hair reduction", "Acne extraction and scar treatment"],
    benefits: ["Restores skin barrier health and prevents scarring", "Boosts personal confidence", "Enables early identification of skin cancer"],
    faqs: [
      { q: "Are chemical peels safe?", a: "Yes, when performed by a qualified dermatologist. They are tailored to your skin type and help treat hyperpigmentation, acne scars, and fine lines." },
      { q: "How do I stop hair loss?", a: "Treatment depends on the cause (hormonal, stress, or nutritional deficiency). Options include topical treatments, dietary supplements, and advanced clinical therapies." }
    ]
  }
];

export const blogs = [
  {
    id: "understanding-managing-diabetes",
    title: "Understanding & Managing Diabetes: A Comprehensive Guide",
    category: "Diabetes",
    summary: "Learn the differences between Type 1 and Type 2 diabetes, key symptoms, and practical tips to control your blood sugar through diet, exercise, and medication.",
    content: "Diabetes is a chronic condition that occurs when the pancreas can no longer make insulin, or the body cannot make good use of the insulin it produces. Over time, high blood glucose levels can damage blood vessels and lead to serious health complications.\n\n### Types of Diabetes\n1. **Type 1 Diabetes:** An autoimmune condition where the body attacks insulin-producing cells.\n2. **Type 2 Diabetes:** The body becomes resistant to insulin, often associated with weight, diet, and lack of exercise.\n\n### Practical Control Strategies\n- **Healthy Diet:** Focus on high-fiber, low-glycemic foods like vegetables, whole grains, and lean proteins.\n- **Regular Exercise:** At least 150 minutes of moderate activity (like brisk walking) per week.\n- **Blood Sugar Monitoring:** Check levels regularly to adapt diet or insulin doses.\n- **Consistent Medication:** Take prescribed medication or insulin as directed by your endocrinologist.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    author: "Dr. Rahul Sharma",
    date: "2026-06-15",
    references: ["American Diabetes Association guidelines", "World Health Organization (WHO) Diabetes Factsheets"],
    faqs: [
      { q: "Can Type 2 diabetes be reversed?", a: "Yes, in many cases, early-stage Type 2 diabetes can be put into remission through significant weight loss, dietary changes, and regular physical activity." },
      { q: "What is a normal fasting blood sugar level?", a: "For a person without diabetes, a normal fasting blood sugar level is under 100 mg/dL. A level of 100-125 mg/dL indicates prediabetes." }
    ]
  },
  {
    id: "preventative-heart-care-tips",
    title: "Preventative Heart Care: How to Protect Your Cardiovascular Health",
    category: "Heart Disease",
    summary: "Heart disease is one of the leading causes of mortality. Discover essential lifestyle changes, dietary habits, and screenings that keep your heart beating strong.",
    content: "Maintaining a healthy heart is a lifetime commitment. By choosing a healthy lifestyle, monitoring your vital signs, and having regular screenings, you can significantly reduce your risk of cardiovascular problems.\n\n### Core Pillars of Heart Health\n- **Reduce Sodium Intake:** Keep salt consumption below 2,300 mg per day to manage blood pressure.\n- **Incorporate Healthy Fats:** Swap saturated and trans fats for omega-3 fatty acids found in olive oil, nuts, and fish.\n- **Manage Stress:** High stress releases cortisol and adrenaline, which can raise heart rate and blood pressure. Practice mindfulness, yoga, or deep breathing.\n- **Avoid Smoking:** Nicotine constricts blood vessels and damages arterial linings.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    author: "Dr. Vikram Aditya",
    date: "2026-06-28",
    references: ["American Heart Association (AHA) Prevention Standards", "European Society of Cardiology guidelines"],
    faqs: [
      { q: "How much exercise do I need for my heart?", a: "At least 30 minutes of moderate-intensity aerobic exercise, 5 days a week, is recommended by cardiologist associations worldwide." },
      { q: "Are eggs bad for the heart?", a: "Moderate egg consumption (1 egg per day) is safe for most healthy individuals and does not significantly increase heart disease risk." }
    ]
  },
  {
    id: "childhood-vaccination-schedule-importance",
    title: "The Childhood Vaccination Schedule: Why it Matters",
    category: "Vaccination",
    summary: "A detailed breakdown of recommended vaccines for kids, how they build immune memory, and why adhering to the medical schedule is crucial for community immunity.",
    content: "Vaccines are one of medical science's greatest achievements. They protect children from dangerous illnesses like polio, measles, and whooping cough before they are exposed to them in schools or playgrounds.\n\n### How Vaccines Work\nVaccines introduce a weakened or inactive part of a antigen into the body. The child's immune system recognizes it as foreign, produces antibodies, and creates memory cells without making the child sick. If they encounter the actual virus later, their body immediately neutralizes it.\n\n### Sticking to the Schedule\nDelaying vaccines leaves babies vulnerable during the first months of life when their immune systems are still developing. Group immunity (herd immunity) also relies on high community vaccination rates to protect children who cannot receive vaccines due to allergies or medical conditions.",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=600",
    author: "Dr. Ananya Sen",
    date: "2026-07-01",
    references: ["CDC Immunization Schedules", "Indian Academy of Pediatrics (IAP) Immunization Guidelines"],
    faqs: [
      { q: "Do vaccines cause autism?", a: "No. Extensive scientific studies involving millions of children over the last two decades have repeatedly proven there is no link between vaccines and autism." },
      { q: "Can my child get vaccinated if they have a mild cold?", a: "Yes. Children with mild illnesses, such as a low-grade fever, cold, or runny nose, can still safely receive their scheduled vaccines." }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Vikram Malhotra",
    rating: 5,
    text: "HealthSync Clinic has changed the way my family accesses healthcare. Dr. Rahul Sharma is incredibly patient and explained my diabetes management plan so clearly. The online appointment booking is seamless!",
    type: "Diabetes Care"
  },
  {
    id: 2,
    name: "Priyanka Deshmukh",
    rating: 5,
    text: "I brought my 2-year-old to Dr. Ananya Sen for vaccinations. She made my child feel completely safe, and the infrastructure is clean and child-friendly. Highly recommended for pediatric care.",
    type: "Pediatrics"
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    rating: 4,
    text: "I underwent physical therapy and orthocare under Dr. Arjun Mehta after a knee injury. The recovery plan was structured, and the team was supportive throughout my journey back to running.",
    type: "Orthopedics"
  }
];

export const insuranceProviders = [
  "Star Health Insurance",
  "HDFC ERGO General Insurance",
  "Niva Bupa Health Insurance",
  "ICICI Lombard Health Care",
  "Care Health Insurance",
  "SBI General Insurance"
];

export const faqs = [
  {
    q: "How do I book an appointment online?",
    a: "Click the 'Book Appointment' button in the navigation header or on any services page. Select your desired department, preferred doctor, pick an available date and time slot, enter your patient details, and submit the booking."
  },
  {
    q: "Do you provide online video consultation?",
    a: "Yes. We offer fully secure online video and phone consultations. You can select 'Online Consultation' when booking an appointment or directly via the patient portal."
  },
  {
    q: "Can I download my lab reports online?",
    a: "Absolutely! Go to the 'Lab Reports' section in the menu, input your unique Patient ID, and check your test status. Once the status shows 'Completed', you can instantly download the PDF report."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major health insurance policies, credit/debit cards, Net Banking, UPI payments (GPay, PhonePe, Paytm), and cash payments at the reception counter."
  },
  {
    q: "What are the clinic's operating hours?",
    a: "Our regular OPD and consultation services run Monday through Saturday, from 8:00 AM to 8:00 PM. Our Emergency department and ambulance services operate 24x7."
  }
];
