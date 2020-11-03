import React from "react";
import '../style/contact.css';
import { Link } from 'react-router-dom';
import gitHubLogo from '../assets/gitHubLogo.svg'
import Joi from 'joi-browser';
import axios from 'axios';
import Form from './common/form';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class contact extends Form{

  state = {
    data:{
      name:"",
      email:"",
    },
    errors:{}
  }
  schema = {
    name:Joi.string().label('name').required(),
    email:Joi.string().email().label('email').required()
  }



  doSubmit = (e) => {
    const url = '/contactDetails';
    const payload = {
      name:this.state.data.name,
      email:this.state.data.email 
    }
  axios({
      url:url,
      method:'POST',
      data: payload,
      headers: {
        'Content-Type': 'application/json',
    }
  }).then(() => {
    this.setState({data:{
      name:"",
      email:"",
    },
    errors:{}
  })
  })
  .then(toast.success("Response received! We'll contact you shortly"))


  }
  handleSubmitContactForm = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors: errors || {} });
    this.doSubmit();
    this.resetUserInputs();
    e.target.reset();
};
  render(){
    console.log(this.state.data)
    const {name, email} = this.state;
    return (
      <div style={{background:"#1a1a1d"}}>
        <nav className="navbar sticky-top navbar-expand-md pb-2">
          <div className="align-items-start justify-content-end">

                <Link to="/"><button className="btn rounded gearson-redirect m-3" style={{background:"#d8953d"}}>
                  <svg className="mr-2" width="25" height="auto" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M6.57764 8.77344C6.59214 8.79192 6.60614 8.81094 6.62015 8.83019C6.60614 8.81094 6.59214 8.79195 6.57764 8.77344Z" fill="#78B9EB"/>
                  <path d="M6.42358 8.5957C6.43384 8.60619 6.44283 8.61744 6.45282 8.62819C6.44286 8.61744 6.43384 8.60619 6.42358 8.5957Z" fill="#78B9EB"/>
                  <path d="M6.7207 8.9834C6.7297 8.99866 6.73972 9.0134 6.74845 9.0289C6.73969 9.0134 6.7297 8.9994 6.7207 8.9834Z" fill="#78B9EB"/>
                  <path d="M6.84985 9.24023C6.85659 9.25699 6.8621 9.27448 6.8686 9.29025C6.8621 9.27448 6.85662 9.25696 6.84985 9.24023Z" fill="#78B9EB"/>
                  <path d="M6.20337 8.4043C6.21913 8.41631 6.23562 8.42779 6.25112 8.44003C6.23559 8.42756 6.2191 8.41631 6.20337 8.4043Z" fill="#78B9EB"/>
                  <path d="M5.99585 8.2666C6.01609 8.27811 6.03584 8.29159 6.05585 8.30284C6.03584 8.29059 6.01609 8.27835 5.99585 8.2666Z" fill="#78B9EB"/>
                  <path d="M6.12891 11.6496C6.27665 11.5567 6.41517 11.4501 6.5429 11.3312C6.57814 11.2979 6.60914 11.2599 6.63466 11.2187C6.77165 10.9977 6.8729 10.7564 6.93466 10.5039C6.8129 10.9704 6.5269 11.3774 6.12891 11.6496Z" fill="#78B9EB"/>
                  <path d="M5.2478 8.0166C5.27156 8.01936 5.29479 8.0236 5.31806 8.02735C5.29479 8.0246 5.27156 8.01936 5.2478 8.0166Z" fill="#78B9EB"/>
                  <path d="M5.78491 8.15918C5.79367 8.16293 5.80167 8.16768 5.8099 8.17142C5.80167 8.16768 5.79364 8.16293 5.78491 8.15918Z" fill="#78B9EB"/>
                  <path d="M6.92676 9.46973C6.93326 9.49322 6.93927 9.51672 6.94501 9.54048C6.93927 9.51672 6.93326 9.49322 6.92676 9.46973Z" fill="#78B9EB"/>
                  <path d="M4.99073 12C4.93398 12 4.87873 11.9943 4.82324 11.9893C4.87873 11.9938 4.93398 12 4.99073 12Z" fill="#78B9EB"/>
                  <path d="M5.50583 11.9326L5.47583 11.9404L5.50583 11.9326Z" fill="#78B9EB"/>
                  <path d="M6.98096 9.7373C6.98295 9.75204 6.98597 9.76631 6.98769 9.78104C6.98594 9.76631 6.98295 9.75204 6.98096 9.7373Z" fill="#78B9EB"/>
                  <path d="M4.74076 11.983C4.65976 11.9722 4.57925 11.9572 4.5 11.9375C4.57925 11.9572 4.65976 11.9722 4.74076 11.983Z" fill="#78B9EB"/>
                  <path d="M5.25836 11.9805C5.24685 11.982 5.23612 11.9842 5.22461 11.9855C5.23586 11.9842 5.24711 11.982 5.25836 11.9805Z" fill="#78B9EB"/>
                  <path d="M6.09607 11.6709C6.06057 11.6942 6.02406 11.7159 5.98706 11.7371C6.02482 11.7172 6.05983 11.6934 6.09607 11.6709Z" fill="#78B9EB"/>
                  <path d="M6.99837 10.0293C6.99837 10.051 6.99611 10.0723 6.99512 10.0938C6.99611 10.0723 6.99813 10.0495 6.99837 10.0293Z" fill="#78B9EB"/>
                  <path d="M6.97738 10.2842C6.97313 10.3137 6.96938 10.3434 6.96387 10.3724C6.96914 10.3429 6.97339 10.3137 6.97738 10.2842Z" fill="#78B9EB"/>
                  <path d="M5.49707 8.06445C5.51857 8.06996 5.54031 8.07471 5.56158 8.08095C5.54031 8.07471 5.51857 8.06996 5.49707 8.06445Z" fill="#78B9EB"/>
                  <path d="M0.75001 11.0001H1.02502C1.23227 11.0001 1.41751 11.1286 1.49052 11.3226C1.51902 11.3976 1.54976 11.4713 1.58277 11.5438C1.66929 11.7328 1.62953 11.9556 1.48278 12.1028L1.28752 12.3001C1.09278 12.4954 1.09278 12.8113 1.28752 13.0066L1.99401 13.7131C2.18928 13.9078 2.50527 13.9078 2.70051 13.7131L2.89677 13.5176C3.04402 13.3708 3.26676 13.3311 3.45578 13.4176C3.52829 13.4508 3.60203 13.4816 3.67703 13.5098C3.87104 13.5826 3.9998 13.7678 4.00003 13.9751V14.2501C4.00003 14.5264 4.22377 14.7501 4.50004 14.7501H5.50003C5.77627 14.7501 6.00004 14.5264 6.00004 14.2501V13.9751C6.00004 13.7679 6.12854 13.5826 6.32254 13.5096C6.39754 13.4811 6.47128 13.4504 6.54379 13.4174C6.73279 13.3308 6.95553 13.3706 7.10281 13.5173L7.29907 13.7128C7.49433 13.9076 7.81033 13.9076 8.00556 13.7128L8.71206 13.0063C8.90679 12.8111 8.90679 12.4951 8.71206 12.2999L8.51656 12.1036C8.36981 11.9563 8.33005 11.7336 8.41657 11.5446C8.44982 11.4721 8.48058 11.3983 8.50882 11.3233C8.58157 11.1288 8.76734 11.0001 8.97508 11.0001H9.25009C9.52633 11.0001 9.7501 10.7763 9.7501 10.5001V9.50007C9.7501 9.22383 9.52636 9.00006 9.25009 9.00006H8.97508C8.76784 9.00006 8.58259 8.87156 8.50958 8.67756C8.48108 8.60256 8.45035 8.52882 8.41733 8.45631C8.33058 8.26731 8.37057 8.04457 8.51732 7.89729L8.71282 7.70103C8.90755 7.50577 8.90755 7.18978 8.71282 6.99454L8.00626 6.28805C7.811 6.09331 7.495 6.09331 7.29977 6.28805L7.10351 6.48354C6.95626 6.63029 6.73352 6.67005 6.5445 6.58354C6.47199 6.55028 6.39825 6.51952 6.32325 6.49128C6.12874 6.41854 5.99998 6.23279 5.99998 6.02502V5.75001C5.99998 5.47377 5.77624 5.25 5.49997 5.25H4.50001C4.22377 5.25 4 5.47374 4 5.75001V6.02502C4 6.23227 3.87151 6.41751 3.6775 6.49052C3.6025 6.51902 3.52876 6.54976 3.45625 6.58277C3.26726 6.66929 3.04451 6.62953 2.89724 6.48278L2.69998 6.28752C2.50472 6.09278 2.18872 6.09278 1.99349 6.28752L1.28799 6.99451C1.09325 7.18978 1.09325 7.50577 1.28799 7.70101L1.48349 7.89727C1.63024 8.04451 1.67023 8.26726 1.58348 8.45628C1.55023 8.52879 1.51946 8.60253 1.49122 8.67753C1.41821 8.87177 1.23247 9.00029 1.02496 9.00003H0.75001C0.47377 9.00003 0.25 9.22377 0.25 9.50004V10.5001C0.25 10.7763 0.47377 11.0001 0.75001 11.0001ZM4.50001 8.06256C4.66352 8.02131 4.83151 8.0003 5.00002 8.00007C5.08279 8.00057 5.16552 8.00631 5.24779 8.01706C5.27155 8.01981 5.29478 8.02406 5.31804 8.02781C5.3788 8.0373 5.4383 8.04981 5.49704 8.06481C5.51855 8.07032 5.54029 8.07507 5.56156 8.08131C5.63755 8.10305 5.71205 8.1293 5.7848 8.16006C5.79356 8.16381 5.80156 8.16855 5.80979 8.1723C5.87327 8.20055 5.9353 8.2323 5.99553 8.26705C6.01577 8.2788 6.03552 8.29204 6.05553 8.30329C6.10554 8.33505 6.15552 8.36903 6.20304 8.4048C6.2188 8.41682 6.2353 8.42807 6.25079 8.44055C6.31106 8.48903 6.3688 8.5408 6.42329 8.59556C6.43355 8.60604 6.44254 8.6173 6.45253 8.62805C6.49654 8.67431 6.53828 8.72279 6.57754 8.7733C6.59204 8.79179 6.60605 8.8108 6.62005 8.83005C6.65579 8.88006 6.68954 8.93004 6.72004 8.98406C6.72904 8.99933 6.73906 9.01406 6.74779 9.02956C6.78579 9.09782 6.81953 9.16857 6.8493 9.24082C6.85604 9.25758 6.86155 9.27483 6.86805 9.29083C6.89005 9.34907 6.90956 9.40834 6.92606 9.46884C6.93256 9.49233 6.93857 9.51583 6.94431 9.53959C6.95957 9.60483 6.97156 9.67084 6.98032 9.73734C6.98231 9.75208 6.98533 9.76635 6.98705 9.78108C6.99532 9.85383 6.9998 9.92684 7.00006 10.0001C7.00006 10.0101 7.00006 10.0198 6.99857 10.0298C6.99857 10.0511 6.99631 10.0728 6.99532 10.0943C6.99233 10.1586 6.98656 10.2221 6.97756 10.2848C6.97355 10.3143 6.9693 10.3436 6.96406 10.3731C6.95556 10.4178 6.94454 10.4613 6.93329 10.5051C6.87154 10.7576 6.77029 10.9988 6.63329 11.2198C6.60781 11.2611 6.57678 11.2991 6.54154 11.3323C6.4143 11.4508 6.27605 11.5573 6.12877 11.6501L6.09628 11.6713C6.06004 11.6938 6.02377 11.7176 5.98727 11.7376C5.83601 11.8233 5.67426 11.8886 5.50601 11.9323L5.47601 11.9401C5.40426 11.9575 5.33175 11.9713 5.25851 11.9808C5.24726 11.9823 5.23601 11.9846 5.22476 11.9858C5.15026 11.9948 5.07502 11.9996 5.00002 12.0001H4.99076C4.93402 12.0001 4.87876 11.9943 4.82327 11.9893C4.79603 11.9868 4.76779 11.987 4.74077 11.9836C4.65977 11.9728 4.57926 11.9573 4.50001 11.9376C3.43 11.6608 2.78676 10.5691 3.0635 9.49907C3.24575 8.79457 3.79577 8.24481 4.50001 8.06256Z" fill="black"/>
                  <path d="M6.74854 9.0293C6.78653 9.09756 6.82028 9.16831 6.85005 9.24056C6.82028 9.16828 6.78653 9.09756 6.74854 9.0293Z" fill="#78B9EB"/>
                  <path d="M6.86865 9.29199C6.89065 9.35024 6.91017 9.4095 6.92666 9.47C6.91017 9.4095 6.89065 9.35026 6.86865 9.29199Z" fill="#78B9EB"/>
                  <path d="M7.00004 10.0002C6.99977 9.92748 6.99579 9.85474 6.98779 9.78223C6.99655 9.86446 7.00004 9.94723 6.99854 10.03C7.00004 10.02 7.00004 10.0102 7.00004 10.0002Z" fill="#78B9EB"/>
                  <path d="M6.94507 9.54102C6.96033 9.60626 6.97232 9.67227 6.98108 9.73877C6.97232 9.67227 6.96033 9.60626 6.94507 9.54102Z" fill="#78B9EB"/>
                  <path d="M5.31812 8.02734C5.37888 8.03684 5.43838 8.04935 5.49712 8.06435C5.43838 8.04958 5.37888 8.03684 5.31812 8.02734Z" fill="#78B9EB"/>
                  <path d="M5 8C5.08276 8.0005 5.1655 8.00624 5.24776 8.01699C5.1655 8.00624 5.08273 8.0005 5 8Z" fill="#78B9EB"/>
                  <path d="M5.81006 8.17285C5.87354 8.20109 5.93557 8.23259 5.9958 8.2676C5.93554 8.23285 5.87354 8.20109 5.81006 8.17285Z" fill="#78B9EB"/>
                  <path d="M5.56152 8.08105C5.63752 8.10279 5.71202 8.12904 5.78477 8.15981C5.71202 8.12904 5.63752 8.10279 5.56152 8.08105Z" fill="#78B9EB"/>
                  <path d="M6.62012 8.83008C6.65586 8.88009 6.68961 8.93007 6.72011 8.98409C6.68961 8.93109 6.65586 8.87959 6.62012 8.83008Z" fill="#78B9EB"/>
                  <path d="M6.45264 8.62793C6.49638 8.67419 6.53812 8.72267 6.57765 8.77318C6.53839 8.7227 6.49664 8.67419 6.45264 8.62793Z" fill="#78B9EB"/>
                  <path d="M6.05566 8.30273C6.10567 8.33449 6.15565 8.36848 6.20317 8.40425C6.15542 8.36848 6.10641 8.33446 6.05566 8.30273Z" fill="#78B9EB"/>
                  <path d="M6.25 8.44043C6.3105 8.48868 6.36801 8.54042 6.4225 8.59544C6.36801 8.54068 6.31026 8.48895 6.25 8.44043Z" fill="#78B9EB"/>
                  <path d="M5.98712 11.7383C5.83513 11.8225 5.67361 11.8878 5.50586 11.933C5.67411 11.8893 5.83586 11.824 5.98712 11.7383Z" fill="#78B9EB"/>
                  <path d="M5.47507 11.9404C5.40332 11.9579 5.33081 11.9717 5.25757 11.9812C5.33081 11.9717 5.40332 11.9579 5.47507 11.9404Z" fill="#78B9EB"/>
                  <path d="M4.99996 11.9998C5.07523 11.9996 5.15023 11.9951 5.22496 11.9863C5.14721 11.9953 5.06922 11.9996 4.99097 11.9993L4.99996 11.9998Z" fill="#78B9EB"/>
                  <path d="M4.82322 11.9891C4.79598 11.9866 4.76773 11.9869 4.74072 11.9834C4.76771 11.9869 4.79595 11.9866 4.82322 11.9891Z" fill="#78B9EB"/>
                  <path d="M6.99529 10.0947C6.99254 10.1577 6.9863 10.2212 6.97754 10.2852C6.98656 10.2225 6.9923 10.159 6.99529 10.0947Z" fill="#78B9EB"/>
                  <path d="M6.12868 11.6504C6.11793 11.6574 6.10718 11.6649 6.09619 11.6716L6.12868 11.6504Z" fill="#78B9EB"/>
                  <path d="M6.96411 10.373C6.95611 10.4168 6.9441 10.4611 6.93335 10.5051C6.9446 10.4613 6.95559 10.4178 6.96411 10.373Z" fill="#78B9EB"/>
                  <path d="M7.24491 9.89998C7.24242 9.83998 7.23817 9.78024 7.2309 9.72074C7.22291 9.65673 7.21341 9.59324 7.20014 9.53099C7.19138 9.49023 7.1799 9.44998 7.16888 9.40949C7.15488 9.35799 7.13915 9.30725 7.12163 9.25724C7.10938 9.22249 7.09664 9.18798 7.08363 9.15373C7.05137 9.07372 7.01463 8.99547 6.97338 8.91974C6.97013 8.91399 6.96814 8.90772 6.96489 8.90198C6.89988 8.78623 6.82464 8.67648 6.73989 8.57424C6.73265 8.56524 6.72439 8.55675 6.71689 8.54799C6.68238 8.50724 6.6469 8.46774 6.60963 8.42998C6.59012 8.40974 6.56964 8.39072 6.54914 8.37124C6.52415 8.34798 6.49913 8.32498 6.47414 8.30298C6.44387 8.27673 6.41288 8.25124 6.38138 8.22648L6.3404 8.19599C5.95365 7.90624 5.48314 7.74974 4.99989 7.75C4.9749 7.75 4.94988 7.75375 4.92489 7.75475C4.87163 7.75624 4.81813 7.75926 4.7644 7.76474C4.73616 7.76772 4.70765 7.77098 4.67941 7.77499C4.59791 7.78574 4.51716 7.80074 4.43715 7.82025C3.2334 8.13124 2.50965 9.35925 2.82064 10.5633C3.02563 11.3565 3.64538 11.9757 4.43888 12.18C4.4429 12.18 4.44714 12.1813 4.45139 12.1823C4.53764 12.2038 4.62515 12.2205 4.71339 12.2323C4.77164 12.2395 4.82991 12.241 4.88838 12.2438C4.92738 12.2458 4.96338 12.2516 5.00414 12.2516C5.07539 12.2516 5.14939 12.2468 5.22489 12.2393C5.23289 12.2393 5.24088 12.237 5.24988 12.2361C5.31064 12.2293 5.37213 12.2203 5.43489 12.2078C5.45988 12.2031 5.48314 12.1968 5.50713 12.1913C5.55114 12.1811 5.59488 12.1703 5.63988 12.1571C5.67489 12.1466 5.70887 12.1343 5.74312 12.1223C5.77737 12.1103 5.81288 12.0973 5.84838 12.0838C5.88389 12.0703 5.91363 12.0548 5.94588 12.0398C5.9879 12.0206 6.02964 12.0016 6.07089 11.9791H6.07239C6.30565 11.8541 6.52113 11.6986 6.71314 11.5163C6.76488 11.4678 6.81014 11.4128 6.84714 11.3523C7.04241 11.0396 7.17041 10.6896 7.22364 10.3248C7.23064 10.2766 7.23688 10.2283 7.24063 10.1791C7.24412 10.1338 7.24664 10.0888 7.24763 10.0438C7.24763 10.0296 7.24962 10.0161 7.24962 10.0018C7.24992 9.96648 7.2464 9.93399 7.24491 9.89998ZM4.56067 8.30497C4.70417 8.26873 4.85191 8.25022 4.99992 8.24998C5.07143 8.25048 5.14268 8.25522 5.21367 8.26448C5.23268 8.26674 5.25143 8.27023 5.27018 8.27298C5.32418 8.28147 5.37767 8.29223 5.43044 8.30573C5.44769 8.31024 5.46495 8.31423 5.48194 8.31897C5.61495 8.35724 5.74295 8.41123 5.86318 8.47946C5.88243 8.49071 5.90118 8.50246 5.92019 8.51421C5.95968 8.5392 5.99794 8.56422 6.03568 8.5927C6.05592 8.60743 6.07643 8.62193 6.09594 8.6377C6.14496 8.67695 6.19195 8.7187 6.23669 8.76271C6.25444 8.78069 6.2707 8.80047 6.28793 8.81922C6.31667 8.85048 6.34467 8.88247 6.37142 8.91622C6.38991 8.93948 6.40766 8.96348 6.42518 8.98773C6.45017 9.02374 6.47519 9.06124 6.49769 9.09924C6.5102 9.11998 6.52268 9.14022 6.53545 9.16149C6.56771 9.22073 6.59645 9.28199 6.62144 9.34475C6.63143 9.36974 6.63993 9.39476 6.64895 9.41975C6.66521 9.46574 6.67921 9.51224 6.69146 9.55926C6.6977 9.58425 6.7047 9.60651 6.70995 9.63077C6.72445 9.69827 6.7352 9.76677 6.7417 9.83553C6.7432 9.85378 6.7432 9.87226 6.74446 9.89052C6.74794 9.94803 6.74897 10.0058 6.74671 10.0638C6.74671 10.0845 6.74496 10.1053 6.74373 10.1258C6.73921 10.1863 6.73148 10.2468 6.72123 10.3075C6.62774 10.8273 6.30498 11.2773 5.84273 11.5325C5.81173 11.5488 5.78124 11.564 5.75074 11.578L5.73 11.588C5.58474 11.654 5.43149 11.7002 5.27399 11.726C5.263 11.7278 5.25175 11.7297 5.2405 11.7312C5.20924 11.7358 5.17851 11.7395 5.14801 11.7422C5.10776 11.7457 5.06727 11.7477 5.02602 11.7485C5.00853 11.7485 4.99128 11.7485 4.97378 11.7485C4.91455 11.7477 4.85554 11.7442 4.79677 11.7375L4.76677 11.734C4.69801 11.725 4.62978 11.7123 4.56252 11.6955C3.62628 11.4558 3.06152 10.5025 3.30102 9.56626C3.45928 8.94751 3.94227 8.46426 4.56076 8.30526L4.56067 8.30497Z" fill="#231F20"/>
                  <path d="M14.2501 5.25H13.4639C13.3591 5.251 13.2651 5.18499 13.2309 5.086C13.1534 4.85376 13.0596 4.62724 12.9501 4.40824C12.9036 4.31373 12.9231 4.2 12.9981 4.126L13.5556 3.56774C13.8481 3.27498 13.8481 2.80025 13.5556 2.50749L12.4926 1.44624C12.1998 1.15374 11.7251 1.15374 11.4323 1.44624L10.8751 2.00326C10.8014 2.07826 10.6876 2.09777 10.5931 2.05151C10.3741 1.9415 10.1476 1.84726 9.91512 1.76927C9.81563 1.73525 9.74912 1.64127 9.75012 1.53627V0.75C9.75012 0.335742 9.41438 0 9.00012 0H7.50012C7.08586 0 6.75012 0.335742 6.75012 0.75V1.53624C6.75112 1.64098 6.68511 1.73499 6.58612 1.76924C6.35388 1.84723 6.12736 1.94147 5.90836 2.05125C5.81385 2.09774 5.69986 2.0785 5.62612 2.00326L5.06786 1.44577C4.7746 1.15403 4.30087 1.15403 4.00761 1.44577L2.94662 2.50676C2.65386 2.79952 2.65386 3.27451 2.94662 3.56725L3.76638 4.3885C3.86564 4.4845 4.02387 4.48198 4.11988 4.38299C4.21363 4.28625 4.21389 4.13273 4.12037 4.0355L3.30012 3.21451C3.20262 3.11675 3.20262 2.95875 3.30012 2.86102L4.36111 1.80003C4.45861 1.70253 4.6171 1.70253 4.7146 1.80003L5.27309 2.35752C5.49908 2.58478 5.84534 2.64176 6.1321 2.49853C6.33009 2.39927 6.53485 2.31428 6.74485 2.24379C7.04784 2.14128 7.25136 1.85628 7.2501 1.5363V0.75C7.2501 0.612012 7.3621 0.50001 7.50009 0.50001H9.00009C9.13808 0.50001 9.25008 0.612012 9.25008 0.75V1.53624C9.24882 1.85625 9.45232 2.14099 9.75534 2.2435C9.96534 2.31398 10.1703 2.39924 10.3683 2.4985C10.6551 2.641 11.0008 2.58398 11.2271 2.35726L11.7856 1.8C11.8831 1.7025 12.0416 1.7025 12.1391 1.8L13.2001 2.86125C13.2976 2.95875 13.2976 3.11701 13.2001 3.21451L12.6426 3.773C12.4156 3.99899 12.3586 4.34525 12.5016 4.63201C12.6008 4.83 12.6858 5.03476 12.7563 5.24476C12.8588 5.54774 13.1438 5.7515 13.4638 5.75001H14.2501C14.3881 5.75001 14.5001 5.86201 14.5001 6V7.5C14.5001 7.63799 14.3881 7.74999 14.2501 7.74999H13.4639C13.1439 7.74873 12.8591 7.95223 12.7566 8.25524C12.6861 8.46524 12.6009 8.67024 12.5016 8.86825C12.3589 9.15501 12.4159 9.50101 12.6429 9.727L13.2004 10.2855C13.2979 10.383 13.2979 10.5415 13.2004 10.639L12.1388 11.7C12.0413 11.7975 11.8831 11.7975 11.7856 11.7L10.9641 10.8802C10.8681 10.781 10.7098 10.7785 10.6106 10.8745C10.5113 10.9705 10.5088 11.1287 10.6048 11.228C10.6068 11.23 10.6088 11.232 10.6111 11.234L11.4323 12.0537C11.7251 12.3462 12.1998 12.3462 12.4926 12.0537L13.5536 10.993C13.8463 10.7 13.8463 10.2255 13.5536 9.93249L12.9969 9.375C12.9219 9.30126 12.9023 9.1875 12.9486 9.09299C13.0586 8.874 13.1529 8.6475 13.2309 8.415C13.2649 8.31551 13.3589 8.24901 13.4639 8.25H14.2501C14.6644 8.25 15.0001 7.91426 15.0001 7.5V6C15.0001 5.58574 14.6644 5.25 14.2501 5.25Z" fill="black"/>
                  <path d="M10.5478 4.45238C9.27784 3.18514 7.22184 3.18514 5.95182 4.45238C5.85582 4.55164 5.85857 4.70987 5.95806 4.80588C6.05506 4.89936 6.20855 4.89936 6.30532 4.80588C7.37208 3.72488 9.11331 3.71313 10.1943 4.77989C11.2754 5.84665 11.2871 7.58788 10.2203 8.66891C10.2116 8.67767 10.2031 8.6864 10.1943 8.69489C10.0951 8.7909 10.0923 8.94913 10.1883 9.04839C10.2843 9.14765 10.4426 9.1504 10.5418 9.0544C10.5438 9.0524 10.5458 9.05038 10.5478 9.04839C11.8151 7.77837 11.8151 5.72237 10.5478 4.45238Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="15" height="15" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span className="is-audiowide p-0">Gears'On!</span>
                </button>
                </Link>
                <a href="https://github.com/Luffy-webdev/Page"><button className="btn rounded gearson-redirect m-3" style={{background:"#156D38"}}>
                <img className="mr-2" src={gitHubLogo} alt="github"/>
                <span className="is-audiowide p-0">github</span>
                </button></a>

          </div>
        </nav>
        <div className="container mt-5">
          <h1 className="contact-heading is-op mb-5">Let's work together!</h1>
            <form onSubmit={this.handleSubmitContactForm}>
            <div className="row align-items-center mt-5 mb-5 justify-content-center">
                <div className="col-md-3">
                <div className="form-group mb-5">
                  <input onChange={this.handleChange} id="name" placeholder="name" name="name" type="text" className="contact-input form-control"/>
                </div>
                <div className="form-group">
                  <input onChange={this.handleChange} id="email" placeholder="e-mail" name="email" type="text" className="contact-input form-control"/>               
                </div> 
            </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <button disabled={this.validate()} className="btn ml-3 btn-md rounded contact-form-button">Submit</button>
              </div>
            </form>
            <ToastContainer autoClose={3000}/>
        </div>
      </div>
    );
  }
}

//<h1 class="font-style" style={{fontSize:"30px"}}> <a href="https://github.com/Luffy-webdev/Page">GitHub-Me</a></h1>