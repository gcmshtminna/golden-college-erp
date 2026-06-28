function showDept(dept){

let info = "";

if(dept === "CHEW"){
info = "Community Health Extension Workers (CHEW) program prepares students to become frontline healthcare providers in communities. Graduates are trained to deliver essential primary healthcare services, health education, maternal care, disease prevention, and rural health support. It is one of the most important programs for building strong public health systems in Nigeria.";
}

if(dept === "PUBLIC"){
info = "Public Health focuses on improving and protecting the health of populations. Students are trained in disease prevention, health promotion, environmental health, epidemiology, and community health planning. This program prepares graduates for roles in government health agencies, NGOs, and global health organizations.";
}

if(dept === "XRAY"){
info = "X-Ray and Medical Imaging Technology trains students in advanced diagnostic imaging techniques used in modern hospitals. Students learn radiography, ultrasound basics, patient positioning, radiation safety, and image interpretation support. Graduates play a vital role in accurate disease diagnosis and medical treatment planning.";
}

if(dept === "LAB"){
info = "Medical Laboratory Technician program trains students in clinical laboratory science, including blood testing, microbiology, chemical pathology, and diagnostic procedures. Graduates work in hospitals, clinics, and diagnostic centers supporting doctors with accurate laboratory results for patient care.";
}

if(dept === "PHARM"){
info = "Pharmacy Technician program equips students with knowledge of drug preparation, dispensing, pharmaceutical calculations, and patient counseling support. Graduates assist pharmacists in hospitals, pharmacies, and healthcare institutions ensuring safe and effective medication use.";
}

if(dept === "HEALTH"){
info = "Health Education and Promotion focuses on training professionals who promote healthy living and prevent diseases in communities. Students learn communication strategies, public health campaigns, behavioral change methods, and community mobilization techniques.";
}

if(dept === "FAMILY"){
info = "Family Health Care program trains students in maternal health, child health, reproductive health, and family wellness services. Graduates support hospitals and community health centers in providing care for mothers, infants, and families.";
}

alert(info);

}