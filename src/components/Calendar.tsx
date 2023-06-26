import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, StyleSheet, Text } from 'react-native';

interface IDay {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

LocaleConfig.locales['ar'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.',
  ],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
  today: 'Hoy',
};

LocaleConfig.defaultLocale = 'ar';

const CalendarScreen = () => {
  const [day, setDay] = useState<IDay | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        onDayPress={day => {
          setDay(day);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected ?? '']: { selected: true, disableTouchEvent: true, selectedColor: '#00e0e0' },
        }}
      />
      <Text>{JSON.stringify(day)}</Text>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
