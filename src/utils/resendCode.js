const reSendHandler = (isPending, toast, number, mutate) => {
  const phoneRegex = /^09\d{9}$/;

  if (isPending) {
    toast("چند لحظه صبر کنید!", {
      icon: "👏",
    });
    return;
  }

// that's right which user in before this stage enter self number but for immune i develop one simple validate

  if (!number) {
    toast.error("شماره خود را به صورت کامل وارد کنید!");
    return;
  } else if (!phoneRegex.test(number)) {
    toast.error("یک شماره معتبر وارد کنید!");
    return;
  } else {
    mutate(number, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(`کد ارسال شده ${data.code} را وارد کنید`, {
          duration: 10000,
        });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }
};

export default reSendHandler;
