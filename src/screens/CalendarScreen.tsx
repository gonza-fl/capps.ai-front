import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, StyleSheet, Text } from 'react-native';

interface IDay {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

const CalendarScreen = () => {
  const [day, setDay] = useState<IDay | null>(null);

  return (
    <View style={styles.calendarContainer}>
      <Calendar onDayPress={day => setDay(day)} />
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
