import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, StyleSheet, Text } from 'react-native';
import { datesOfCalendarConfigs } from '@constants';

interface IDay {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

LocaleConfig.locales['ar'] = datesOfCalendarConfigs;

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
