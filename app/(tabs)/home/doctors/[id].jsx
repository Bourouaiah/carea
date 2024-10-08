import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

const doctorDetailPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    doctorId,
    name,
    about,
    phoneNumber,
    profilePicture,
    email,
    baridiMobRip,
    yearsOfExperience,
    speciality,
    workingDays,
    workingHours,
    workStation,
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    appointments,
    reviews,
  } = route.params;

  const totalRating = reviews?.reduce(
    (sum, review) => sum + parseFloat(review.rating),
    0
  );
  const averageRating = totalRating / reviews?.length;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: "relative",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"always"}
      >
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#FAFAFA",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 15,
            marginVertical: 20,
          }}
        >
          <Image
            style={{ width: 70, height: 70, borderRadius: 200 }}
            source={
              profilePicture
                ? { uri: profilePicture }
                : require("../../../../assets/images/empty-profile-picture.png")
            }
          />
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#747373",
                borderBottomWidth: 1,
                paddingBottom: 8,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingTop: 8,
                paddingBottom: 5,
              }}
            >
              <Text>
                {speciality.charAt(0).toUpperCase() + speciality.slice(1)}
              </Text>
              <Text>|</Text>
              <Text>{workStation}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Certaficates</Text>
          <View style={{ marginVertical: 10, gap: 10 }}>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: certificate1 }}
            />
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: certificate2 }}
            />
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: certificate3 }}
            />
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: certificate4 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <View
              style={{
                backgroundColor: "#EDF3FF",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                borderRadius: 15,
              }}
            >
              <FontAwesome6 name="users" size={24} color="#246BFD" />
            </View>
            <Text
              style={{ color: "#246BFD", fontWeight: "bold", fontSize: 16 }}
            >
              {appointments ? appointments?.length : "00"}
            </Text>
            <Text style={{ color: "#424242", textAlign: "center" }}>
              patients
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <View
              style={{
                backgroundColor: "#EDF3FF",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                borderRadius: 15,
              }}
            >
              <MaterialIcons name="timeline" size={24} color="#246BFD" />
            </View>
            <Text
              style={{ color: "#246BFD", fontWeight: "bold", fontSize: 16 }}
            >
              {yearsOfExperience}
            </Text>
            <Text style={{ color: "#424242", textAlign: "center" }}>
              Years of experience
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <View
              style={{
                backgroundColor: "#EDF3FF",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                borderRadius: 15,
              }}
            >
              <FontAwesome6 name="star-half-alt" size={24} color="#246BFD" />
            </View>
            <Text
              style={{ color: "#246BFD", fontWeight: "bold", fontSize: 16 }}
            >
              {reviews ? averageRating : "--"}
            </Text>
            <Text style={{ color: "#424242", textAlign: "center" }}>
              rating
            </Text>
          </View>

          <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
            <View
              style={{
                backgroundColor: "#EDF3FF",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                borderRadius: 15,
              }}
            >
              <MaterialIcons name="reviews" size={24} color="#246BFD" />
            </View>
            <Text
              style={{ color: "#246BFD", fontWeight: "bold", fontSize: 16 }}
            >
              {reviews ? reviews?.length : "--"}
            </Text>
            <Text style={{ color: "#424242", textAlign: "center" }}>
              reviews
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>About me</Text>
          <Text style={{ color: "#424242" }}>{about}</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Phone number</Text>
          <Text style={{ color: "#424242" }}>{phoneNumber}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            BaridiMob rip code
          </Text>
          <Text style={{ color: "#424242" }}>{baridiMobRip}</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Working time</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ color: "#424242" }}>{workingDays}</Text>
            <Text style={{ color: "#424242" }}>|</Text>
            <Text style={{ color: "#424242" }}>{workingHours}</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Reviews</Text>
          {reviews?.length > 0 ? (
            reviews.map((item, index) => (
              <View style={{ marginVertical: 10, gap: 10 }} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    {!item.reviewerProfilePicture ? (
                      <Image
                        style={{ width: 30, height: 30, borderRadius: 200 }}
                        source={require("../../../../assets/images/empty-profile-picture.png")}
                      />
                    ) : (
                      <Image
                        style={{ width: 50, height: 50, borderRadius: 200 }}
                        source={{ uri: item.reviewerProfilePicture }}
                      />
                    )}
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      {item.reviewerName}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#246BFD",
                        paddingVertical: 3,
                        paddingHorizontal: 6,
                        borderColor: "#246BFD",
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AntDesign name="star" size={14} color="#246BFD" />
                      <Text style={{ fontWeight: "bold" }}> {item.rating}</Text>
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{ color: "#212121" }}>{item.review}</Text>
                </View>
                <View>
                  <Text style={{ color: "#616161", fontSize: 12 }}>
                    {item.formattedReviewDate}, {item.formattedReviewTime}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={{ color: "#616161", marginVertical: 10 }}>
              No reviews for now
            </Text>
          )}
        </View>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("appointments/[id]", {
                doctorId,
                name,
                phoneNumber,
                profilePicture,
                email,
                speciality,
                workStation,
              })
            }
          >
            <Text
              style={{
                backgroundColor: "#246BFD",
                color: "white",
                textAlign: "center",
                padding: 10,
                borderRadius: 15,
                fontWeight: "bold",
              }}
            >
              Book appointment
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default doctorDetailPage;
