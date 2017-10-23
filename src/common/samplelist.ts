import { formValidatorAppRoutes } from '../form-validator/form-validator.module';
import { buttonAppRoutes } from '../button/button.module';
import { listAppRoutes } from '../listview/listview.module';
import { gridRouteConfig } from '../grid/grid.module';
import { toolbarAppRoutes } from '../toolbar/toolbar.module';
import { accordionAppRoutes } from '../accordion/accordion.module';
import { numericAppRoutes } from '../numerictextbox/numerictextbox.module';
import { dropdownlistAppRoutes } from '../dropdownlist/dropdownlist.module';
import { treeAppRoutes } from '../treeview/treeview.module';
import { comboboxAppRoutes } from '../combobox/combobox.module';
import { autoCompleteAppRoutes } from '../autocomplete/autocomplete.module';
import { calendarAppRoutes } from '../calendar/calendar.module';
import { datePickerAppRoutes } from '../datepicker/datepicker.module';
import { dateRangePickerAppRoutes } from '../daterangepicker/daterangepicker.module';
import { chartAppRoutes } from '../chart/chart.module';
import { dialogAppRoutes } from '../dialog/dialog.module';
import { circulargaugeAppRoutes } from '../circulargauge/circulargauge.module';
import { lineargaugeAppRoutes } from '../lineargauge/lineargauge.module';
import { textboxesAppRoutes } from '../textboxes/textboxes.module';
import { tooltipAppRoutes } from '../tooltip/tooltip.module';
import { maskedTextBoxAppRoutes } from '../maskedtextbox/maskedtextbox.module';
import { timePickerAppRoutes } from '../timepicker/timepicker.module';
import { multiselectAppRoutes } from '../multiselect/multiselect.module';
import { contextMenuAppRoutes } from '../contextmenu/contextmenu.module';
import { tabAppRoutes } from '../tab/tab.module';
export let samplesList: any = [
    {
        'name': 'Chart', 'category': 'Datavisualization', 'order': '01', 'path': 'chart', 'samples': chartAppRoutes
    },
    {
        'name': 'CircularGauge', 'category': 'Datavisualization', 'order': '01', 'path': 'circulargauge', 'samples': circulargaugeAppRoutes
    },
    {
        'name': 'LinearGauge', 'category': 'Datavisualization', 'order': '01', 'path': 'lineargauge', 'samples': lineargaugeAppRoutes
    },
    {
        'name': 'Grid', 'category': 'Grids', 'order': '02', 'path': 'grid', 'samples': gridRouteConfig
    },
    {
        'name': 'Form-Validator', 'category': 'Editors', 'order': '03', 'path': 'form-validator', 'samples': formValidatorAppRoutes
    },
    {
        'name': 'Button', 'category': 'Editors', 'order': '03', 'path': 'button', 'samples': buttonAppRoutes
    },
    {
        'name': 'Calendar', 'category': 'Editors', 'order': '03', 'path': 'calendar', 'samples': calendarAppRoutes
    },
    {
        'name': 'DatePicker', 'category': 'Editors', 'order': '03', 'path': 'datepicker', 'samples': datePickerAppRoutes
    },
    {
        'name': 'DateRangePicker', 'category': 'Editors', 'order': '03', 'path': 'daterangepicker', 'samples': dateRangePickerAppRoutes, type: "new"
    },
    {
        'name': 'DropDownList', 'category': 'Editors', 'order': '03', 'path': 'dropdownlist', 'samples': dropdownlistAppRoutes
    },
    {
        'name': 'ComboBox', 'category': 'Editors', 'order': '03', 'path': 'combobox', 'samples': comboboxAppRoutes
    },
    {
        'name': 'AutoComplete', 'category': 'Editors', 'order': '03', 'path': 'autocomplete', 'samples': autoCompleteAppRoutes
    },    
    {
        "name": "MultiSelect", "category": "Editors", 'order': '03', "path": "multiselect", "samples": multiselectAppRoutes
    },
    {
        "name": "TimePicker", "category": "Editors", 'order': '03', "path": "timepicker", "samples": timePickerAppRoutes
    },
    {
        'name': 'NumericTextBox', 'category': 'Editors', 'order': '03', 'path': 'numerictextbox', 'samples': numericAppRoutes
    },
    {
        'name': 'TextBoxes', 'category': 'Editors', 'order': '03', 'path': 'textboxes', 'samples': textboxesAppRoutes
    },
    {
        'name': 'ListView', 'category': 'Layout', 'order': '04', 'path': 'listview', 'samples': listAppRoutes
    },
    {
        'name': 'Dialog', 'category': 'Layout', 'order': '04', 'path': 'dialog', 'samples': dialogAppRoutes
    },
    {
        'name': 'Accordion', 'category': 'Navigation', 'order': '05', 'path': 'accordion', 'samples': accordionAppRoutes
    },
    {
        'name': 'Toolbar', 'category': 'Navigation', 'order': '05', 'path': 'toolbar', 'samples': toolbarAppRoutes
    },
     {
        'name': 'TreeView', 'category': 'Navigation', 'order': '05', 'path': 'treeview', 'samples': treeAppRoutes
    },
    {
        'name': 'Tooltip', 'category': 'Layout', 'order': '04', 'path': 'tooltip', 'samples': tooltipAppRoutes
    },
    {
        'name': 'MaskedTextBox', 'category': 'Editors', 'order': '03', 'path': 'maskedtextbox', 'samples': maskedTextBoxAppRoutes
    },
    {
        'name': 'ContextMenu', 'category': 'Navigation', 'order': '05', 'path': 'contextmenu', 'samples': contextMenuAppRoutes
    },
    {
        'name': 'Tab', 'category': 'Navigation', 'order': '05', 'path': 'tab', 'samples': tabAppRoutes
    }
];