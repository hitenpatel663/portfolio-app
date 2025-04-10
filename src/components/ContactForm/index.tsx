import { Form, Formik } from 'formik';
import { ContactFormSchema } from './validation';
import { Box } from '@mui/material';
import { Heading, SectionWrapper, TextFieldComp, Title, NameEmailWrapper } from './index.styles';
import { isEmpty } from 'lodash';
import { SecondaryButton } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';

export const ContactForm = () => {
  const isMobile = useIsMobile();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        contactNo: '',
        subject: '',
        message: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values) => void 0}
    >
      {(props) => (
        <Form>
          <SectionWrapper>
            <Box>
              <Title>Let's talk</Title>
              <Heading>Enter your project details</Heading>
            </Box>
            <NameEmailWrapper isMobile={isMobile}>
              <TextFieldComp
                id="outlined-required"
                label="Name"
                key="name"
                name="name"
                value={props?.values?.name}
                onChange={props?.handleChange}
                error={!isEmpty(props?.errors?.name)}
                helperText={props?.errors?.name}
                fullWidth
              />
              <TextFieldComp
                id="outlined-required"
                label="Email"
                name="email"
                value={props?.values?.email}
                onChange={props?.handleChange}
                error={!isEmpty(props?.errors?.email)}
                helperText={props?.errors?.email}
              />
            </NameEmailWrapper>
            <TextFieldComp
              id="outlined-required"
              label="Contact No"
              name="contactNo"
              value={props?.values?.contactNo}
              onChange={props?.handleChange}
              error={!isEmpty(props?.errors?.contactNo)}
              helperText={props?.errors?.contactNo}
            />
            <TextFieldComp
              id="outlined-required"
              label="Subject"
              name="subject"
              value={props?.values?.subject}
              onChange={props?.handleChange}
              error={!isEmpty(props?.errors?.subject)}
              helperText={props?.errors?.subject}
            />
            <TextFieldComp
              id="outlined-required"
              name="message"
              multiline
              placeholder="Message"
              minRows={2}
              value={props?.values?.message}
              onChange={props?.handleChange}
              error={!isEmpty(props?.errors?.message)}
              helperText={props?.errors?.message}
            />
            <SecondaryButton onClick={() => props?.submitForm()} width="100%">
              Submit
            </SecondaryButton>
          </SectionWrapper>
        </Form>
      )}
    </Formik>
  );
};
