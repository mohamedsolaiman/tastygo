import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, Image, Pressable, Text, View, ScrollView} from "react-native";
import {images} from "@/constants";
import CartButton from "@/components/CartButton";
import CustomButton from "@/components/CustomButton";

const activeOrder = {
    id: "ORD-2025-001",
    restaurant: "Burger Palace",
    items: "Classic Cheeseburger x2, Fries x1, Coke x1",
    total: 62.47,
    placedAt: "12:35 PM",
    estimatedDelivery: "1:05 PM - 1:15 PM",
    progress: 0.6, // 60% — currently in "Preparing" stage
};

const progressStages = [
    {label: "Confirmed", completed: true},
    {label: "Preparing", completed: true},
    {label: "On the Way", completed: false},
    {label: "Delivered", completed: false},
];

const pastOrders = [
    {
        id: "ORD-2025-010",
        restaurant: "Pizza Heaven",
        items: "Pepperoni Pizza x1, Garlic Bread x1",
        total: 36.98,
        date: "Aug 18, 2025",
        status: "Delivered",
    },
    {
        id: "ORD-2025-009",
        restaurant: "Wrap Station",
        items: "Bean Burrito x2, Iced Tea x2",
        total: 49.96,
        date: "Aug 15, 2025",
        status: "Delivered",
    },
    {
        id: "ORD-2025-008",
        restaurant: "Green Bowl Kitchen",
        items: "Protein Power Bowl x1, Fresh Salad x1",
        total: 44.48,
        date: "Aug 12, 2025",
        status: "Delivered",
    },
    {
        id: "ORD-2025-007",
        restaurant: "Sizzling Grill",
        items: "BBQ Bacon Burger x1, Onion Rings x1, Coke x1",
        total: 41.99,
        date: "Aug 8, 2025",
        status: "Delivered",
    },
    {
        id: "ORD-2025-006",
        restaurant: "Cheesy Delights",
        items: "Mozzarella Sticks x2, Crispy Fries x1",
        total: 18.99,
        date: "Aug 3, 2025",
        status: "Delivered",
    },
    {
        id: "ORD-2025-005",
        restaurant: "Burger Palace",
        items: "Double Patty Burger x1, Sweet Corn x1",
        total: 36.99,
        date: "Jul 28, 2025",
        status: "Delivered",
    },
];

const Orders = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32">
                {/* Header */}
                <View className="flex-between flex-row w-full px-5 my-5">
                    <View className="flex-start">
                        <Text className="small-bold uppercase text-primary">My Orders</Text>
                        <Text className="paragraph-bold text-dark-100 mt-0.5">Track & reorder</Text>
                    </View>
                    <CartButton />
                </View>

                {/* Active Order Section */}
                <View className="px-5 mb-6">
                    <Text className="h3-bold text-dark-100 mb-4">Active Order</Text>
                    <View className="bg-white rounded-2xl p-5 shadow-lg shadow-dark-100/10">
                        <View className="flex-row items-center justify-between mb-3">
                            <Text className="base-bold text-dark-100">{activeOrder.restaurant}</Text>
                            <Text className="small-bold text-primary">{activeOrder.id}</Text>
                        </View>
                        <Text className="body-regular text-gray-100 mb-1">{activeOrder.items}</Text>
                        <Text className="body-regular text-gray-100 mb-3">
                            Est. delivery: {activeOrder.estimatedDelivery}
                        </Text>

                        {/* Progress Bar */}
                        <View className="mb-3">
                            <View className="flex-row items-center justify-between mb-2">
                                {progressStages.map((stage, index) => (
                                    <View key={index} className="flex-1 items-center">
                                        <View className="flex-row items-center w-full">
                                            <View
                                                className={`size-4 rounded-full ${
                                                    stage.completed ? "bg-primary" : "bg-gray-200"
                                                }`}
                                            />
                                            {index < progressStages.length - 1 && (
                                                <View className="flex-1 h-1 mx-1">
                                                    <View className="h-1 bg-gray-200 rounded-full">
                                                        <View
                                                            className={`h-1 rounded-full ${
                                                                stage.completed ? "bg-primary" : "bg-gray-200"
                                                            }`}
                                                            style={{width: "100%"}}
                                                        />
                                                    </View>
                                                </View>
                                            )}
                                        </View>
                                        <Text
                                            className={`body-regular mt-1 ${
                                                stage.completed ? "text-primary" : "text-gray-100"
                                            }`}
                                        >
                                            {stage.label}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View className="flex-row items-center justify-between mt-2">
                            <Text className="paragraph-bold text-dark-100">Total: ${activeOrder.total.toFixed(2)}</Text>
                            <Pressable className="bg-primary/10 px-4 py-2 rounded-full">
                                <Text className="small-bold text-primary">Track Order</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* Past Orders Section */}
                <View className="px-5">
                    <Text className="h3-bold text-dark-100 mb-4">Past Orders</Text>
                    {pastOrders.map((order) => (
                        <View
                            key={order.id}
                            className="bg-white rounded-xl p-4 mb-3 shadow-md shadow-dark-100/10"
                        >
                            <View className="flex-row items-center justify-between mb-2">
                                <Text className="base-bold text-dark-100">{order.restaurant}</Text>
                                <Text className="small-bold text-success">{order.status}</Text>
                            </View>
                            <Text className="body-regular text-gray-100 mb-1" numberOfLines={1}>
                                {order.items}
                            </Text>
                            <View className="flex-row items-center justify-between mt-2">
                                <View className="flex-row items-center gap-x-3">
                                    <Text className="paragraph-bold text-dark-100">${order.total.toFixed(2)}</Text>
                                    <Text className="body-regular text-gray-100">{order.date}</Text>
                                </View>
                                <Pressable className="bg-primary px-4 py-2 rounded-full">
                                    <Text className="small-bold text-white">Reorder</Text>
                                </Pressable>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Orders;
