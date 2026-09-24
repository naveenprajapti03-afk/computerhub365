const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('admissionForm').addEventListener('submit',function(e){
  e.preventDefault();
  const f=new FormData(this);
  const msg=`*ComputerHub365 Admission Enquiry*\n\nName: ${f.get('name')}\nMobile: ${f.get('phone')}\nEmail: ${f.get('email')||'-'}\nQualification: ${f.get('qualification')||'-'}\nParent Name: ${f.get('parent')||'-'}\nAddress: ${f.get('address')||'-'}\nCourse: ${f.get('course')}\nPreferred Batch / Other Details: ${f.get('details')||'-'}`;
  window.open('https://wa.me/918955028641?text='+encodeURIComponent(msg),'_blank');
});
