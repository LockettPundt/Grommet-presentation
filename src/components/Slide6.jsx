/* eslint-disable import/extensions */
import React, { useState } from 'react';
import {
  Text, Box, Accordion, AccordionPanel, Menu, Layer,
  Form, FormField, TextInput, Button, DataTable, Meter, Clock, Paragraph,
} from 'grommet';
import { Grommet } from 'grommet-icons';
import Slide from './Slide.jsx';
import ModalWindow from './Modal.jsx';

export default function Slide6() {
  const [modalOpen, setModalOpen] = useState(false);
  const [accordion, setAcordion] = useState(false);
  const [forms, setForms] = useState(false);
  const [formText, setFormText] = useState('');
  const [dataTable, setDataTable] = useState(false);

  return (
    <Slide prev="5" next="7">
      <Box
        direction="row"
        align="center"
      >
        <Grommet size="medium" color="plain" />
        <Paragraph
          margin={{
            left: '10px',
          }}
          weight="bold"
          size="xlarge"
          alignSelf="center"
        >
          {' '}
          Example Components
        </Paragraph>
      </Box>
      {accordion && (
        <Layer>
          <ModalWindow>
            <Accordion>
              <AccordionPanel label="Hi There!">
                <Box pad="medium" background="#444444">
                  <Text size="xlarge">HI!</Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Bye Now!">
                <Box pad="medium" background="#444444">
                  <Text
                    size="xlarge"
                    onClick={() => setAcordion(!accordion)}
                  >
                    Bye!
                  </Text>
                </Box>
              </AccordionPanel>
            </Accordion>
          </ModalWindow>
        </Layer>
      )}
      {forms && (
        <Layer>
          <ModalWindow>
            <Form
              value={formText}
              onChange={(nextValue) => setFormText(nextValue)}
              onReset={() => setFormText('Back to the Middle')}
              onSubmit={() => setForms(!forms)}
            >
              <FormField name="name" htmlfor="text-input-id" label="First Name">
                <TextInput id="text-input-id" name="name" placeholder="How are you?" />
              </FormField>
              <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
              </Box>
            </Form>
          </ModalWindow>
        </Layer>
      )}
      {dataTable && (
        <Layer
          onClick={() => setDataTable(!dataTable)}
        >
          <ModalWindow>
            <Box
              width="99%"
            >
              <DataTable
                columns={[
                  {
                    property: 'name',
                    header: <Text>Agency</Text>,
                    primary: true,
                  },
                  {
                    property: 'percent',
                    header: 'Percent Complete',
                    render: (datum) => (
                      <Box pad={{ vertical: 'xsmall' }}>
                        <Meter
                          values={[{ value: datum.percent }]}
                          thickness="small"
                          size="small"
                        />
                      </Box>
                    ),
                  },
                ]}
                data={[
                  { name: 'Endless Boogie', percent: 20 },
                  { name: "Lucky's Vegan", percent: 35 },
                  { name: "Gravity's Rainbow", percent: 40 },
                  { name: 'Epic Soundtracks', percent: 80 },
                ]}
              />

            </Box>

          </ModalWindow>
        </Layer>
      )}
      {modalOpen && (
        <Layer
          onClick={() => setModalOpen(!modalOpen)}
        >
          <ModalWindow>
            <Clock type="digital" />
          </ModalWindow>
        </Layer>
      )}
      <Menu
        size="medium"
        label="Components"
        items={[
          { label: 'Check out this modal bruh.', onClick: () => setModalOpen(!modalOpen) },
          { label: 'Accordion', onClick: () => setAcordion(!accordion) },
          { label: 'Form', onClick: () => setForms(!forms) },
          { label: 'Data Table', onClick: () => setDataTable(!dataTable) },
        ]}
      />
    </Slide>
  );
}
