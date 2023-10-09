import {
  ThemeProvider, theme, ksmThemeStyles, InfoPages, FileUpload,
  Info, FormLabel, AccordionComponent, VerticalStepper,
  Button, Checkbox, Select, Switch, Input, Grid, GridItem,
  Box, SimpleGrid, ErrorText, TextInput, DatePickerComponent,
  Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardHeader,
  CardBody, CardFooter, Divider, BasicCard, CardWithHeader, Toaster,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, TextArea, RadioButton, Spinner, LoadingOverlay, Fonts,
  VideoRecorder, Otp, LinkButton,
  SideMenu, CustomTable, Alert, AlertIcon, AlertTitle, Icon, Pagination,
  AlertDescription, ToggleSwitch
} from '@ksmartikm/ui-components';

import i18next from 'i18next';
import { TOST_CONFIG } from 'common/constants';
import FormController from './FormController';
import Navigator from './Navigator';
import {
  HeaderLabel, HeaderLabelSM, FormTitle, FormWrapper
} from './BasicComponents';

const { createTost, ToastContainer } = Toaster;
const Toast = createTost(TOST_CONFIG);

export const { t } = i18next;

export {
  ThemeProvider, ksmThemeStyles, theme, FormController, Button, InfoPages,
  FileUpload, FormWrapper, Info, FormLabel, AccordionComponent,
  Checkbox, Select, Switch, Input, Grid, GridItem, Box, SimpleGrid,
  ErrorText, TextInput, DatePickerComponent, TextArea,
  Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardHeader, CardBody,
  CardFooter, Divider, BasicCard, CardWithHeader, Toast, ToastContainer,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter, VerticalStepper, Navigator, RadioButton, Spinner, LoadingOverlay,
  Fonts, VideoRecorder, Otp, LinkButton, SideMenu, CustomTable, Alert, AlertIcon, AlertTitle,
  AlertDescription, Icon, Pagination, ToggleSwitch, HeaderLabel, HeaderLabelSM, FormTitle
};
