import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../css/BS.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const BS = () => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const checkbox = () => {
        if (text.length == 0) {
            alert('담당자명을 입력해주세요');
        } else if (text2.length == 0) {
            alert('연락처를 입력해주세요');
        } else if (text3.length == 0) {
            alert('E-Mail을 입력해주세요');
        } else if (text4.length == 0) {
            alert('제목을 입력해주세요');
        } else if (!document.getElementById('agree').checked) {
            alert('개인정보이용동의를 체크해주세요');
        } else {
            alert('확인되었습니다');
        }
    };

    const onchangeText = (e) => {
        setText(e.target.value);
    };

    const onchangeText2 = (e) => {
        setText2(e.target.value);
    };

    const onchangeText3 = (e) => {
        setText3(e.target.value);
    };

    const onchangeText4 = (e) => {
        setText4(e.target.value);
    };
    return (
        <div>
            {/* 네비게이션 바 */}
            <Navbar />

            <main>
                <section>
                    <div className="sub_visual sub_visual07">
                        <div className="inner">
                            <h2>고객지원</h2>
                            <ul className="sub_tab">
                                <li>
                                    <Link to="/AboutCustom">상담문의</Link>
                                </li>
                                <li>
                                    <Link to="/Es">견적신청</Link>
                                </li>
                                <li>
                                    <Link to="/AS">불만접수 및 A/S접수</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="sub_tit">A/S</h3>

                    <div className="write_for">
                        <div className="row">
                            <label for="wirte_name" className="label">
                                담당자 *
                            </label>
                            <div className="input_box name">
                                <input
                                    type="text"
                                    name="b_name"
                                    maxlength="3"
                                    onChange={onchangeText}
                                    value={text}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <label for="wirte_phone" className="label">
                                연락처 *
                            </label>
                            <div className="input_box phone">
                                <div className="phone_input">
                                    <input
                                        type="tel"
                                        name="b_Mobil1"
                                        maxlength="12"
                                        onChange={onchangeText2}
                                        value={text2}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <label for="wirte_phone" className="label">
                                E-Mail *
                            </label>
                            <div className="input_box email">
                                <div className="email_input">
                                    <input
                                        type="text"
                                        name="b_email"
                                        maxlength="40"
                                        onChange={onchangeText3}
                                        value={text3}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label for="wirte_phone" className="label">
                                제목 *
                            </label>
                            <div className="input_box title">
                                <input
                                    type="text"
                                    name="b_title"
                                    maxlength="40"
                                    onChange={onchangeText4}
                                    value={text4}
                                />
                            </div>
                        </div>
                        <div className="row contents">
                            <label for="wirte_phone" className="label">
                                내용 *
                            </label>
                            <div className="input_box ">
                                <textarea name="b_text"></textarea>
                            </div>
                        </div>

                        <div className="txtbox">
                            <strong>개인정보 수집 및 이용 동의 (필수)</strong>
                            <div className="data_boxes">
                                <div className="data">
                                    <p className="txt">
                                        ('cleaning.github.io'이하
                                        '제일종합관리서비스(주)')은(는)
                                        개인정보보호법에 따라 이용자의 개인정보
                                        보호 및 권익을 보호하고 개인정보와
                                        관련한 이용자의 고충을 원활하게 처리할
                                        수 있도록 다음과 같은 처리방침을 두고
                                        있습니다. <br /> <br />
                                        ('제일종합관리서비스(주)') 은(는) 회사는
                                        개인정보처리방침을 개정하는 경우
                                        웹사이트 공지사항(또는 개별공지)을
                                        통하여 공지할 것입니다. <br />
                                        <br />○ 본 방침은부터 2019년 10월
                                        20일부터 시행됩니다.
                                    </p>

                                    <p className="sub_tit">
                                        1. 개인정보의 처리 목적
                                    </p>

                                    <p className="txt">
                                        {' '}
                                        ('cleaning.github.io'이하
                                        '제일종합관리서비스(주)')은(는)
                                        개인정보를 다음의 목적을 위해
                                        처리합니다. 처리한 개인정보는 다음의
                                        목적이외의 용도로는 사용되지 않으며 이용
                                        목적이 변경될 시에는 사전동의를 구할
                                        예정입니다.
                                        <br />
                                        가. 홈페이지 회원가입 및 관리 <br />
                                        회원 가입의사 확인, 회원제 서비스 제공에
                                        따른 본인 식별·인증, 회원자격 유지·관리,
                                        제한적 본인확인제 시행에 따른 본인확인,
                                        서비스 부정이용 방지, 만14세 미만 아동
                                        개인정보 수집 시 법정대리인 동의 여부
                                        확인, 각종 고지·통지, 고충처리, 분쟁
                                        조정을 위한 기록 보존 등을 목적으로
                                        개인정보를 처리합니다. <br />
                                        나. 재화 또는 서비스 제공 <br />
                                        문의응대 등을 목적으로 개인정보를
                                        처리합니다.{' '}
                                    </p>

                                    <p className="sub_tit">
                                        2. 개인정보 파일 현황
                                    </p>

                                    <p className="txt">
                                        1. 개인정보 파일명 : 개인정보처리 <br />
                                        - 개인정보 항목 : 문의시 받음 <br />
                                        - 수집방법 : 홈페이지 <br />
                                        - 보유근거 : 정보주체의 동의 <br />
                                        - 보유기간 : 3년 <br />- 관련법령 :
                                        신용정보의 수집/처리 및 이용 등에 관한
                                        기록 : 3년
                                    </p>

                                    <p className="sub_tit">
                                        3. 개인정보의 처리 및 보유 기간
                                    </p>

                                    <p className="txt">
                                        ① ('제일종합관리서비스(주)')은(는)
                                        법령에 따른 개인정보 보유·이용기간 또는
                                        정보주체로부터 개인정보를 수집시에 동의
                                        받은 개인정보 보유,이용기간 내에서
                                        개인정보를 처리,보유합니다. <br />
                                        ② 각각의 개인정보 처리 및 보유 기간은
                                        다음과 같습니다. <br />
                                        와 관련한 개인정보는 수집.이용에 관한
                                        동의일로부터까지 위 이용목적을 위하여
                                        보유.이용됩니다. <br />
                                        -보유근거 : 정보주체의 동의 <br />
                                        -관련법령 : 신용정보의 수집/처리 및 이용
                                        등에 관한 기록 : 3년 <br />
                                        -예외사유 :
                                    </p>

                                    <p className="sub_tit">
                                        4. 정보주체와 법정대리인의 권리·의무 및
                                        그 행사방법 이용자는 개인정보주체로써
                                        다음과 같은 권리를 행사할 수 있습니다.
                                    </p>
                                    <p className="txt">
                                        ① 정보주체는 제일종합관리서비스(주)에
                                        대해 언제든지 개인정보
                                        열람,정정,삭제,처리정지 요구 등의 권리를
                                        행사할 수 있습니다. <br />
                                        ② 제1항에 따른 권리
                                        행사는제일종합관리서비스(주)에 대해
                                        개인정보 보호법 시행령 제41조제1항에
                                        따라 서면, 전자우편, 모사전송(FAX) 등을
                                        통하여 하실 수 있으며
                                        제일종합관리서비스(주)은(는) 이에 대해
                                        지체 없이 조치하겠습니다. <br />
                                        ③ 제1항에 따른 권리 행사는 정보주체의
                                        법정대리인이나 위임을 받은 자 등
                                        대리인을 통하여 하실 수 있습니다. 이
                                        경우 개인정보 보호법 시행규칙 별지
                                        제11호 서식에 따른 위임장을 제출하셔야
                                        합니다. <br />
                                        ④ 개인정보 열람 및 처리정지 요구는
                                        개인정보보호법 제35조 제5항, 제37조
                                        제2항에 의하여 정보주체의 권리가 제한 될
                                        수 있습니다. <br />
                                        ⑤ 개인정보의 정정 및 삭제 요구는 다른
                                        법령에서 그 개인정보가 수집 대상으로
                                        명시되어 있는 경우에는 그 삭제를 요구할
                                        수 없습니다. <br />⑥
                                        제일종합관리서비스(주)은(는) 정보주체
                                        권리에 따른 열람의 요구, 정정·삭제의
                                        요구, 처리정지의 요구 시 열람 등 요구를
                                        한 자가 본인이거나 정당한 대리인인지를
                                        확인합니다.
                                    </p>

                                    <p className="sub_tit">
                                        5. 처리하는 개인정보의 항목 작성{' '}
                                    </p>
                                    <p className="txt">
                                        ① ('cleaning.github.io'이하
                                        '제일종합관리서비스(주)')은(는) 다음의
                                        개인정보 항목을 처리하고 있습니다.{' '}
                                        <br />
                                        <br />
                                        - 필수항목 : 이메일, 휴대전화번호,
                                        자택주소, 비밀번호 질문과 답, 비밀번호,
                                        로그인ID, 성별, 생년월일, 이름,
                                        회사전화번호, 직책, 회사명, 직업 <br />-
                                        선택항목 :
                                    </p>

                                    <p className="sub_tit">
                                        6. 개인정보의
                                        파기('제일종합관리서비스(주)')은(는)
                                        원칙적으로 개인정보 처리목적이 달성된
                                        경우에는 지체없이 해당 개인정보를
                                        파기합니다. 파기의 절차, 기한 및 방법은
                                        다음과 같습니다.{' '}
                                    </p>
                                    <p className="txt">
                                        -파기절차 <br />
                                        이용자가 입력한 정보는 목적 달성 후
                                        별도의 DB에 옮겨져(종이의 경우 별도의
                                        서류) 내부 방침 및 기타 관련 법령에 따라
                                        일정기간 저장된 후 혹은 즉시 파기됩니다.
                                        이 때, DB로 옮겨진 개인정보는 법률에
                                        의한 경우가 아니고서는 다른 목적으로
                                        이용되지 않습니다. <br />
                                        -파기기한 <br />
                                        이용자의 개인정보는 개인정보의
                                        보유기간이 경과된 경우에는 보유기간의
                                        종료일로부터 5일 이내에, 개인정보의 처리
                                        목적 달성, 해당 서비스의 폐지, 사업의
                                        종료 등 그 개인정보가 불필요하게 되었을
                                        때에는 개인정보의 처리가 불필요한 것으로
                                        인정되는 날로부터 5일 이내에 그
                                        개인정보를 파기합니다. <br />
                                        -파기방법 <br />
                                        전자적 파일 형태의 정보는 기록을 재생할
                                        수 없는 기술적 방법을 사용합니다.
                                    </p>

                                    <p className="sub_tit">
                                        7. 개인정보 자동 수집 장치의 설치•운영
                                        및 거부에 관한 사항
                                    </p>
                                    <p className="txt">
                                        제일종합관리서비스(주) 은 정보주체의
                                        이용정보를 저장하고 수시로 불러오는
                                        ‘쿠키’를 사용하지 않습니다.
                                    </p>

                                    <p className="sub_tit">
                                        8. 개인정보 보호책임자 작성
                                    </p>

                                    <p className="txt">
                                        ①
                                        제일종합관리서비스(주)(‘cleaning.github.io’이하
                                        ‘제일종합관리서비스(주)) 은(는) 개인정보
                                        처리에 관한 업무를 총괄해서 책임지고,
                                        개인정보 처리와 관련한 정보주체의
                                        불만처리 및 피해구제 등을 위하여 아래와
                                        같이 개인정보 보호책임자를 지정하고
                                        있습니다. <br />
                                        ▶ 개인정보 보호책임자 <br />
                                        성명 : 김돈
                                        <br />
                                        직급 : 대표
                                        <br />
                                        연락처 : 1877-3855
                                        <br />② 정보주체께서는
                                        제일종합관리서비스(주)(‘cleaning.github.io’이하
                                        ‘제일종합관리서비스(주)) 의 서비스(또는
                                        사업)을 이용하시면서 발생한 모든
                                        개인정보 보호 관련 문의, 불만처리,
                                        피해구제 등에 관한 사항을 개인정보
                                        보호책임자 및 담당부서로 문의하실 수
                                        있습니다.
                                        제일종합관리서비스(주)(‘cleaning.github.io’이하
                                        ‘제일종합관리서비스(주)) 은(는)
                                        정보주체의 문의에 대해 지체 없이 답변 및
                                        처리해드릴 것입니다.
                                    </p>

                                    <p className="sub_tit">
                                        9. 개인정보 처리방침 변경
                                    </p>

                                    <p className="txt">
                                        ①이 개인정보처리방침은 시행일로부터
                                        적용되며, 법령 및 방침에 따른 변경내용의
                                        추가, 삭제 및 정정이 있는 경우에는
                                        변경사항의 시행 7일 전부터 공지사항을
                                        통하여 고지할 것입니다.
                                    </p>

                                    <p className="sub_tit">
                                        10. 개인정보의 안전성 확보 조치
                                        ('제일종합관리서비스(주)')은(는)
                                        개인정보보호법 제29조에 따라 다음과 같이
                                        안전성 확보에 필요한 기술적/관리적 및
                                        물리적 조치를 하고 있습니다.
                                    </p>

                                    <p className="txt">
                                        1. 정기적인 자체 감사 실시 <br />
                                        개인정보 취급 관련 안정성 확보를 위해
                                        정기적(분기 1회)으로 자체 감사를
                                        실시하고 있습니다. <br />
                                        2. 개인정보 취급 직원의 최소화 및 교육{' '}
                                        <br />
                                        개인정보를 취급하는 직원을 지정하고
                                        담당자에 한정시켜 최소화 하여 개인정보를
                                        관리하는 대책을 시행하고 있습니다.{' '}
                                        <br />
                                        3. 개인정보의 암호화 <br />
                                        이용자의 개인정보는 비밀번호는 암호화
                                        되어 저장 및 관리되고 있어, 본인만이 알
                                        수 있으며 중요한 데이터는 파일 및 전송
                                        데이터를 암호화 하거나 파일 잠금 기능을
                                        사용하는 등의 별도 보안기능을 사용하고
                                        있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="chk_box">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    id="agree"
                                />
                                <label for="agree">
                                    <span></span>
                                    <p>
                                        개인정보 수집 및 이용안내에 동의합니다.
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="btn_boxe">
                            <div>
                                <button onClick={checkbox}>확인</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* 푸터 */}
            <Footer />

            {/* <Route path="/" component={Home} exact /> */}
        </div>
    );
};

export default BS;
