import React from 'react';
import { Link } from 'gatsby';
import ChevronRight from 'baseui/icon/chevron-right';
import { Button, SIZE } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { StatefulRadioGroup, Radio, ALIGN } from 'baseui/radio';
import { StatefulTextarea } from 'baseui/textarea';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    method: Yup.string()
        .matches(/(link|file)/, "Please choose an option."),
    code: Yup.array()
        .of(Yup.object().shape({
            content: Yup.string("Please upload an .ino file."),
            name: Yup.string()
                .required("Please provide a sketch name."),
            primary: Yup.boolean()
        }))
        .min(1, "Please provide a sketch."),

    compatibleBoards: Yup.array()
        .min(1, "Please select at least one compatible board.")
        .required("Please select at least one compatible board."),

    libs: Yup.array()
        .of(Yup.object({
            name: Yup.string(),
            author: Yup.string(),
            version: Yup.string(),
            url: Yup.string()
                .url(),
        })),
    email: Yup.string()
        .email("Please provide a valid email address.")
        .required("Please provide an email address."),
    });
const CreatorView = () => {

    const termsSentence = () => {
        return (
            <p className="click-notice">By clicking the 'Book a demo' button, you are indicating that you accept our <Link className="terms-link" to="/terms">Terms of Service</Link> and <Link className="main-privacy-link" to="/privacy">Privacy Policy</Link>.</p>
        )
    }

    return (
                <form action="https://sfbd.us14.list-manage.com/subscribe/post" method="POST">
                    <input type="hidden" name="u" value="d38b74d4495c895a02a8f6ef0" />
                    <input type="hidden" name="id" value="bc784f409b"></input>
                    <div className="input-line">
                        <div className="input-field">

                        <FormControl
                        label={() => "First name"}
                        className="demo-input"
                        >
                        <Input
                                    placeholder="John"
                                    name="MERGE1"
                                    type="text"
                                    size={SIZE.compact}
                                    />
                        </FormControl>
                        </div>
                        <div className="input-field">
                        <FormControl
                        label={() => "Last name"}
                        className="demo-input"
                        >
                        <Input
                                    placeholder="Doe"
                                    name="MERGE2"
                                    type="text"
                                    size={SIZE.compact}
                                    />
                        </FormControl>
                        </div>
                    </div>
                    <div className="input-line">
                    <div className="input-field">
                    <FormControl
                    label={() => "Email address"}
                    className="demo-input"
                    >
                    <Input
                                placeholder="example@central.cx"
                                name="MERGE0"
                                type="text"
                                size={SIZE.compact}
                                />
                    </FormControl>
                    </div>
                    <div className="input-field">

                    <FormControl
                    label={() => "Phone number"}
                    className="demo-input"
                    >
                    <Input
                                placeholder="(123) 456-7890"
                                name="MERGE3"
                                type="tel"
                                size={SIZE.compact}
                                />
                    </FormControl>
                        </div>
                    </div>
                    <div className="input-line">
                    <div className="input-field">

                    <FormControl
                    label={() => "Company name"}
                    className="demo-input"
                    >
                    <Input
                                placeholder="Acme Ltd"
                                name="MERGE4"
                                type="text"
                                size={SIZE.compact}
                                />
                    </FormControl>
                        </div>
                        <div className="input-field">
                    <FormControl
                    label={() => "Company size"}
                    className="demo-input"
                    >
                        <StatefulRadioGroup name="MERGE5" align={ALIGN.horizontal} initialState={{value: '1-25'}}>
                        <Radio value="1-25">1-25</Radio>
                        <Radio value="26-100">26-100</Radio>
                        <Radio value="101-200">101-200</Radio>
                        <Radio value="201-500">201-500</Radio>
                        <Radio value="501-1000">501-1000</Radio>
                        <Radio value="1001+">1001+</Radio>
                        </StatefulRadioGroup>
                    </FormControl>
                    </div>
                    </div>
                    <div className="input-field">
                    <FormControl
                    label={() => "How can we help?"}
                    className="demo-input"
                    >
                        <StatefulTextarea
                            initialState={{value: ''}}
                            placeholder="Let us know..."
                            name="MERGE6"
                            options={[
                                {id: '1-25', size: '1-25'},
                                {id: '26-100', size: '26-100'},
                                {id: '101-200', size: '101-200'},
                                {id: '201-500', size: '201-500'},
                                {id: '501-1000', size: '501-1000'},
                                {id: '1001+', size: '1001+'},
                            ]}
                            />
                    </FormControl>
                    </div>
                    <div className="submit-section">
                    <FormControl
                        caption={
                            termsSentence
                        }
                        className="submit-sub"
                        >
                        <Button
                                type="submit"
                                size={SIZE.compact}
                                endEnhancer={() => <ChevronRight size={24} />}
                                >
                                Book a demo
                            </Button>
                    </FormControl>
                    </div>
                    <div className="field-shift" aria-label="Please leave the following three fields empty" aria-hidden={true}>
                        <label for="b_name">Name: </label>
                        <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name" />

                        <label for="b_email">Email: </label>
                        <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email" />

                        <label for="b_comment">Comment: </label>
                        <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
                    </div>
                </form>
    );
};

export default CreatorView;
