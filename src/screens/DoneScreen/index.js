import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {productDummy} from '../../assets';
import {Header, OrderCard, Space} from '../../components';
import {getAssignData} from '../../redux/action';
import {getData} from '../../utils/storage';

const DoneScreen = ({data, navigation}) => {
  const dispatch = useDispatch();
  const {task} = useSelector(state => state.courierAssignReducer);
  const [token, setToken] = useState('');
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    getData('USER_PROFILE').then(res => {
      setUuid(res.uuid);
    });

    getData('TOKEN').then(res => {
      setToken(res);
    });
  }, []);

  const bearerToken = token.value;
  useEffect(() => {
    if (bearerToken) {
      dispatch(getAssignData(bearerToken, uuid));
    }
  }, [bearerToken, dispatch, uuid]);
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Your Task" headerSubtitle="Finished task" />
      <ScrollView style={styles.content}>
        {task ? (
          task.map((item, index) => {
            console.log(item.delivery_number_assignment);
            if (item.status_assignment === 'Finish') {
              return (
                <OrderCard
                  key={index}
                  productImg={productDummy}
                  orderInv={item.code_order_transaction}
                  address={item.address}
                  date={item.delivery_date}
                  timeSlot={item.time_slot_name}
                  statusTask={item.status_assignment}
                  onDetail={() => navigation.navigate('DetailScreen', item)}
                />
              );
            }
            return;
          })
        ) : (
          <View style={styles.empty}>
            <Space height={200} />
            <Text style={styles.text}>Data not found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  container: {paddingBottom: 30},
  content: {paddingHorizontal: 8, paddingVertical: 20},
});
